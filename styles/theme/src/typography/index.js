import { font, fontFamily } from './helpers';

export default {
  size: font,
  common: fontFamily,
  headings: {
    xl: () => font(48, true),
    l: () => font(36, true),
    m: () => font(24, true),
    s: () => font(19, true),
  },
  captions: {
    xl: bold => font(27, bold),
    l: bold => font(24, bold),
    m: bold => font(19, bold),
  },
  body: {
    l: bold => font(24, bold),
    m: bold => font(19, bold),
    s: bold => font(16, bold),
    xs: bold => font(14, bold),
  },
};
