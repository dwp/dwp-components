import { parsePx } from '../utils';

import unit from './unit';
import property from './property';

import extracted from '../raw.json';

export default {
  unit,
  property,
  page: {
    width: parsePx(extracted.govukPageWidth),
    focus: parsePx(extracted.govukFocusWidth),
    gutter: parsePx(extracted.govukGutter),
    border: {
      desktop: parsePx(extracted.govukBorderWidth),
      wide: parsePx(extracted.govukBorderWidthWide),
      mobile: parsePx(extracted.govukBorderWidthMobile),
    }
  },
  form: {
    element: {
      border: {
        default: parsePx(extracted.govukBorderWidthFormElement),
        error: parsePx(extracted.govukBorderWidthFormElementError),
      },
    },
    group: {
      border: {
        error: parsePx(extracted.govukBorderWidthFormGroupError),
      },
    },
  },
};
