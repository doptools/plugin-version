import { CliArgument, CliCommand, PackageJsonFile,FlagBoolean } from '@doptools/tslib-cli-core';

import semver, { ReleaseType } from 'semver';
import { VersionCommand } from './VersionCommand';


@CliCommand({
  description: 'Bump the version of a project'
})
export default class VersionBump extends VersionCommand {

  @CliArgument({
    description: 'Which part of the semver to bump',
    options: ['major', 'premajor', 'minor', 'preminor', 'patch', 'prepatch', 'prerelease'],
    required: true
  })
  public versionPart?: ReleaseType;

  @FlagBoolean()
  public dryRun?: boolean;

  async run() {
    const pkg = await new PackageJsonFile('package.json').loadFile();
    const currentVersion = semver.parse(pkg.version);
    const nextVersion = semver.parse(pkg.version)?.inc(this.versionPart!);

    this.log(`Bumping ${this.versionPart} from ${currentVersion!.version} to ${nextVersion!.version}. dryRun? ${this.dryRun}`)

  }
}
