
import { Tree, Rule, SchematicContext } from '@angular-devkit/schematics';
import { jsonc } from 'jsonc';

export default async function (opts: { version: string, rules: Rule[], options: any }) {
  opts.rules.push((tree: Tree, context: SchematicContext) => {
    console.log('version hook', opts.options)
    if (tree.exists('package.json')) {
      const content = tree.read('package.json')?.toString('utf8');
      const pkg = jsonc.parse(content!, { stripComments: true });
      pkg.version = opts.version;
      tree.overwrite('package.json', jsonc.stringify(pkg, { space: 2 }));
      return tree;
    }
  });
}
