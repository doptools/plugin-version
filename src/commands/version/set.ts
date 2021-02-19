import { Rule, SchematicContext } from '@angular-devkit/schematics';
import { Tree } from '@angular-devkit/schematics/src/tree/interface';
import { Argument, CliCommand, BooleanFlag } from '@doptools/tslib-cli-core';
import { SemVer } from 'semver';
import { VersionCommand } from './VersionCommand';


@CliCommand({
  description: 'Sets the version of a project'
})
export default class VersionSet extends VersionCommand {

  protected readonly readonly:boolean = false;

  @BooleanFlag()
  protected readonly dryRun:boolean = false;
  @BooleanFlag()
  protected readonly verbose:boolean = false;
  @BooleanFlag()
  protected readonly force:boolean = false;


  @Argument({
    description: 'The verion to set the project to',
    required: true,
    parse: i => new SemVer(i, { loose: false })?.version
  })
  public version?: string;

  protected execute(tree: Tree, context: SchematicContext, options:any): Promise<Rule> {
    return this.applyVersionToProject(this.version!, options);
  }

}
