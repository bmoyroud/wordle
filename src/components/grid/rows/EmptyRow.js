import React from 'react';

import { MAX_WORD_LENGTH } from '../../../config';
import Row from './Row';

export default function EmptyRow() {
  const cells = new Array(MAX_WORD_LENGTH).fill().map((_) => <td></td>);
  return <Row>{cells}</Row>;
}
