import { chain, noop, Rule } from "@angular-devkit/schematics";
import { BooleanFlag, PackageJsonFile, SchematicsCommandBase } from "@doptools/tslib-cli-core";

export abstract class VersionCommand extends SchematicsCommandBase {

    @BooleanFlag()
    protected readonly asdf:boolean = false;
    
    protected packageJson = new PackageJsonFile('package.json').loadFile();

    protected async applyVersionToProject(version: string, options: any): Promise<Rule> {
        const rules: any[] = [];
        await this.config.runHook('version:apply', { version, rules, options });
        return rules.length ? chain(rules) : noop;
    }
}