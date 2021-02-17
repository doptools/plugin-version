import { CliCommand, PackageJsonFile, Shell } from '@doptools/tslib-cli-core';
import {parse} from 'semver';

import { VersionCommand } from './VersionCommand';

@CliCommand({
  description: 'Get the version of the project'
})
export default class GetVersion extends VersionCommand {
  async run() {
    const pkg = await new PackageJsonFile('package.json').loadFile();
    const currentVersion = parse(pkg.version);
    this.log(currentVersion?.version);
  }
}
