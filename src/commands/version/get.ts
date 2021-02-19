import { SchematicContext, Rule } from '@angular-devkit/schematics';
import { Tree } from '@angular-devkit/schematics/src/tree/interface';
import { CliCommand, PackageJsonFile, Shell } from '@doptools/tslib-cli-core';
import { Observable } from '@doptools/tslib-cli-core/node_modules/rxjs';
import { parse } from 'semver';

import { VersionCommand } from './VersionCommand';

@CliCommand({
  description: 'Get the version of the project'
})
export default class GetVersion extends VersionCommand {
  protected async execute(_: Tree, context: SchematicContext): Promise<void | Rule> {

    const dir = await this.fs.list('../test-proj');
    context.logger.info(dir.join('\n'))
    const pkg = await new PackageJsonFile('package.json').loadFile();
    const currentVersion = parse(pkg.version);
    this.log(currentVersion?.version);
  }

}
