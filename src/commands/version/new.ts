import { Rule, SchematicContext } from '@angular-devkit/schematics'
import { Tree } from '@angular-devkit/schematics/src/tree/interface'
import { IRuleOptions } from '@doptools/tslib-cli-core'
import { Observable } from '@doptools/tslib-cli-core/node_modules/rxjs'
import { VersionCommand } from './VersionCommand'

export default class VersionNew extends VersionCommand {
  protected execute(tree: Tree, context: SchematicContext, options: Partial<IRuleOptions>): void | Tree | Observable<Tree> | Rule | Promise<void | Rule> {
    throw new Error('Method not implemented.')
  }
  
}
