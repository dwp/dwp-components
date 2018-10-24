import { mapResponsiveKey } from '../utils';

import extracted from '../raw.json';

const { govukSpacingResponsiveScale: scale } = extracted;

export default (unit, display = 'tablet') => mapResponsiveKey(display, scale[unit.toString()]);
