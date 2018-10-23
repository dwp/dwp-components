const { mapResponsiveKey } = require('../utils');

const { govukSpacingResponsiveScale: scale } = require('../raw.json');

module.exports = (unit, display = 'tablet') => mapResponsiveKey(display, scale[unit.toString()]);
