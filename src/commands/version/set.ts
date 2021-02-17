import { CliArgument, CliCommand, PackageJsonFile, Shell } from '@doptools/tslib-cli-core';
import { VersionCommand } from './VersionCommand';
import {SemVer } from 'semver';

@CliCommand({
  description: 'Sets the version of a project'
})
export default class VersionSet extends VersionCommand {

  @CliArgument({
    description: 'The verion to set the project to',
    required: true,
    parse: i => new SemVer(i, {loose: false})?.version
  })
  public version?: string;



  async run() {
    this.applyVersionToProject(this.version!);

   /* const pkg = await this.packageJson;
    pkg.version = this.version;
    pkg.saveFile();*/
  }
}
