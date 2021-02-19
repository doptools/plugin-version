import { SchematicContext, Rule } from '@angular-devkit/schematics';
import { Tree } from '@angular-devkit/schematics/src/tree/interface';
import { Argument, CliCommand, PackageJsonFile, BooleanFlag } from '@doptools/tslib-cli-core';
import { Observable } from '@doptools/tslib-cli-core/node_modules/rxjs';

import { parse, ReleaseType } from 'semver';
import { VersionCommand } from './VersionCommand';


@CliCommand({
  description: 'Bump the version of a project'
})
export default class VersionBump extends VersionCommand {
  @Argument({
    description: 'Which part of the semver to bump',
    options: ['major', 'premajor', 'minor', 'preminor', 'patch', 'prepatch', 'prerelease'],
    required: true
  })
  public versionPart?: ReleaseType;

  @BooleanFlag()
  public dryRun?: boolean;

  protected async execute(tree: Tree, context: SchematicContext, options: any): Promise<Rule> {
    const pkg = await new PackageJsonFile(tree, 'package.json').loadFile();
    const currentVersion = parse(pkg.version);
    const nextVersion = parse(pkg.version)?.inc(this.versionPart!);
    this.log(`Bumping ${this.versionPart} from ${currentVersion!.version} to ${nextVersion!.version}.`);
    return this.applyVersionToProject(nextVersion!.version, options);
  }

}
