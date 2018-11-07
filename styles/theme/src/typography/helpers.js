import { contextLiteral, mapResponsiveKey } from '../utils';
import { query } from '../media';

import extracted from '../raw.json';

const compiled = contextLiteral(extracted);

export const fontFamily = (font = extracted.govukFontFamily) => compiled`
  font-family: ${font};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media print {
    font-family: ${({ govukFontFamilyPrint }) => govukFontFamilyPrint}
  }
`;

export const font = (size, bold) => compiled`
  font-weight: ${({ govukFontWeightBold, govukFontWeightRegular }) =>
    bold ? govukFontWeightBold : govukFontWeightRegular};

  ${({ govukFontFamily }) => fontFamily(govukFontFamily)}

  ${['mobile', 'tablet']
    .map(
      bp => query(bp, mapResponsiveKey(bp, extracted.govukTypographyScale[size]))`
    font-size: ${scale => scale.fontSize};
    line-height: ${scale => scale.lineHeight};
  `
    )
    .join('\n')}
`;
