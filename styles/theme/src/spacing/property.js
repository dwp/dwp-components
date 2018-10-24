import { contextLiteral } from '../utils';
import { query } from '../media';

import unit from './unit';

const spacing = (key, device, num) => `${key}: ${unit(num, device)};`;

export default (key, dirs) => {
  if (typeof dirs === 'number') {
    return contextLiteral({})`
      ${spacing(key, 'mobile', dirs)}
      ${() => query('tablet')`
        ${spacing(key, 'tablet', dirs)}
      `}
    `;
  }

  const keys = Object.keys(dirs);
  const mobile = keys.map(k => spacing(`${key}-${k}`, 'mobile', dirs[k]));
  const tablet = keys.map(k => spacing(`${key}-${k}`, 'tablet', dirs[k]));

  return contextLiteral({ mobile, tablet })`
    ${mobile.join('\n')}
    ${query('tablet')`
      ${tablet.join('\n')}
    `}
  `;
};
