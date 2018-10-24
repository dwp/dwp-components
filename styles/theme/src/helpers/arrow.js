import { contextLiteral } from '../utils';

import extracted from '../raw.json';

const directions = {
  up: (height, perpendicular) => `
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    border-width: 0 ${perpendicular}px ${height}px ${perpendicular}px;
    border-bottom-color: inherit;
  `,
  right: (height, perpendicular) => `
    clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
    border-width: ${perpendicular}px 0 ${perpendicular}px ${height}px;
    border-left-color: inherit;
  `,
  down: (height, perpendicular) => `
    clip-path: polygon(0% 0%, 50% 100%, 100% 0%);
    border-width: ${height}px ${perpendicular}px 0 ${perpendicular}px;
    border-top-color: inherit;
  `,
  left: (height, perpendicular) => `
    clip-path: polygon(0% 50%, 100% 100%, 100% 0%);
    border-width: ${perpendicular}px ${height}px ${perpendicular}px 0;
    border-right-color: inherit;
  `,
};

export default ({ direction, base, display = 'block' }) => contextLiteral(extracted)`
  display: ${display};
  width: 0;
  height: 0;
  border-style: solid;
  border-color: transparent;
  ${() => directions[direction](Math.ceil(base / 2) * 2, Math.ceil(base / 2))}
`;
