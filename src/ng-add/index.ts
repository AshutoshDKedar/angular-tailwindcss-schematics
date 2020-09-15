import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

/** Rule factory: returns a rule (function) */
export default function (_options: any): Rule {
  // this is a rule. It takes a  `tree` and returns another `tree`.
  return (tree: Tree, _context: SchematicContext) => {
    console.log('schematic works');
    tree.create(_options.name || 'hello', 'world');
    return tree;
  };
}