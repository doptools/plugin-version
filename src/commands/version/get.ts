import { SchematicContext, Rule } from '@angular-devkit/schematics';
import { Tree } from '@angular-devkit/schematics/src/tree/interface';
import { CliCommand } from '@doptools/tslib-cli-core';

import { parse } from 'semver';

import { VersionCommand } from './VersionCommand';

@CliCommand({
  description: 'Get the version of the project'
})
export default class GetVersion extends VersionCommand {
  protected readonly readonly:boolean = true;
  protected async execute(): Promise<void | Rule> {
    const pkg = await this.packageJson;
    if(!pkg){
      this.error("No package.json found.")
    }
    const currentVersion = parse(pkg.version);
    this.log(currentVersion?.version);
  }

}
