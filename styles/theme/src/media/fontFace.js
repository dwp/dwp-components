module.exports = path => `
  @font-face {
    font-family: "nta";
    src: url("${path}/light-2c037cf7e1-v1.eot");
    src: url("${path}/light-2c037cf7e1-v1.eot?#iefix") format("embedded-opentype"),
         url("${path}/light-f38ad40456-v1.woff2") format("woff2"),
         url("${path}/light-458f8ea81c-v1.woff") format("woff");
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: "nta";
    src: url("${path}/bold-fb2676462a-v1.eot");
    src: url("${path}/bold-fb2676462a-v1.eot?#iefix") format("embedded-opentype"),
         url("${path}/bold-a2452cb66f-v1.woff2") format("woff2"),
         url("${path}/bold-f38c792ac2-v1.woff") format("woff");
    font-weight: bold;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: "ntatabularnumbers";
    src: url("${path}/light-tabular-498ea8ffe2-v1.eot");
    src: url("${path}/light-tabular-498ea8ffe2-v1.eot?#iefix") format("embedded-opentype"),
         url("${path}/light-tabular-851b10ccdd-v1.woff2") format("woff2"),
         url("${path}/light-tabular-62cc6f0a28-v1.woff") format("woff");
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: "ntatabularnumbers";
    src: url("${path}/bold-tabular-357fdfbcc3-v1.eot");
    src: url("${path}/bold-tabular-357fdfbcc3-v1.eot?#iefix") format("embedded-opentype"),
         url("${path}/bold-tabular-b89238d840-v1.woff2") format("woff2"),
         url("${path}/bold-tabular-784c21afb8-v1.woff") format("woff");
    font-weight: bold;
    font-style: normal;
    font-display: fallback;
  }
`;
