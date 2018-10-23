const { contextLiteral } = require('../utils');
const { query } = require('../media');

const unit = require('./unit');

const spacing = (key, device, num) => `${key}: ${unit(num, device)};`;

module.exports = (key, dirs) => {
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
