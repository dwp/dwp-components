import { filterKey } from '../utils';

import extracted from '../raw.json';

const { govukColoursOrganisations, govukColours, ...css } = extracted;

const keys = Object.keys(css);

const common = keys
  .filter(key => key.match(/.+Colour$/))
  .reduce((obj, key) => ({ ...obj, [filterKey(key).replace(/Colour$/, '')]: css[key] }), {});

export default {
  common,
  organisations: govukColoursOrganisations,
  display: govukColours,
  buttons: {
    default: {
      background: 'rgb(0, 130, 59)',
      text: 'rgb(255, 255, 255)',
      hover: 'rgb(0, 105, 47)',
      shadow: 'rgb(0, 54, 24)',
    }
  }
};
