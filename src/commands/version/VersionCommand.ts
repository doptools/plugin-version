import { PackageJsonFile } from "@doptools/tslib-cli-core";
import Command from "@oclif/command";

export abstract class VersionCommand extends Command {

    protected packageJson = new PackageJsonFile('package.json').loadFile();


    protected async applyVersionToProject(version: string) {
        await this.config.runHook('version:apply', { version });
    }
}