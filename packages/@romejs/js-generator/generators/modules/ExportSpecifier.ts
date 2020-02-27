/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Generator from '../../Generator';
import {ExportSpecifier, exportSpecifier, AnyNode} from '@romejs/js-ast';

export default function ExportSpecifier(generator: Generator, node: AnyNode) {
  node = exportSpecifier.assert(node);

  generator.print(node.local, node);
  if (node.exported && node.local.name !== node.exported.name) {
    generator.space();
    generator.word('as');
    generator.space();
    generator.print(node.exported, node);
  }
}
