const { resolve, basename, dirname } = require('path');
const { existsSync } = require('fs');
const sassExtract = require('sass-extract');

const ALL = `${__dirname}/../node_modules/govuk-frontend/all.scss`;

const importer = (url, prev) => {
  const filename = `_${basename(url)}.scss`;
  const path = resolve(dirname(prev), dirname(url));
  const file = `${path}/${filename}`;
  if (!existsSync(file)) {
    return new Error(`⛔️  File "${file}" not found.`);
  }
  return { file };
};

const extractOptions = { plugins: ['sass-extract-js'] };

const compileOptions = { file: ALL, importer, extractOptions };

const generate = async () => {
  const rendered = await sassExtract.render(compileOptions);
  const extracted = await sassExtract.extract(rendered, { compileOptions, extractOptions });
  console.log(JSON.stringify(extracted, null, '  ')); // eslint-disable-line no-console
};

generate();
