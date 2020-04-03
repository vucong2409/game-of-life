import {renderLife} from 'renderer';

export const title = 'Tub with long^3 tail';

renderLife([
  [0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
]);
