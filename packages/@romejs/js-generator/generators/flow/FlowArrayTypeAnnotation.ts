/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Generator from '../../Generator';
import {
  FlowArrayTypeAnnotation,
  flowArrayTypeAnnotation,
  AnyNode,
} from '@romejs/js-ast';

export default function FlowArrayTypeAnnotation(
  generator: Generator,
  node: AnyNode,
) {
  node = flowArrayTypeAnnotation.assert(node);

  generator.print(node.elementType, node);
  generator.token('[');
  generator.token(']');
}
