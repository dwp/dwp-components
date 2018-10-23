const { font, fontFamily } = require('./helpers');

module.exports = {
  size: font,
  common: fontFamily,
  headings: {
    xl: () => font(48, true),
    l: () => font(36, true),
    m: () => font(24, true),
    s: () => font(19, true),
  },
  captions: {
    xl: () => font(27),
    l: () => font(24),
    m: () => font(19),
  },
  body: {
    l: () => font(24),
    m: () => font(19),
    s: () => font(16),
    xs: () => font(14),
  },
};
