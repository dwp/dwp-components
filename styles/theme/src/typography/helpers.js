const { contextLiteral, mapResponsiveKey } = require('../utils');
const { query } = require('../media');

const extracted = require('../raw.json');

const compiled = contextLiteral(extracted);

const fontFamily = (font = extracted.govukFontFamily) => compiled`
  font-family: ${font};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media print {
    font-family: ${({ govukFontFamilyPrint }) => govukFontFamilyPrint}
  }
`;

const font = (size, bold) => compiled`
  font-weight: ${({ govukFontWeightBold, govukFontWeightRegular }) => (bold ? govukFontWeightBold : govukFontWeightRegular)};

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

module.exports = {
  font,
  fontFamily,
};
