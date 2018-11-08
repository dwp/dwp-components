import typography from '.';

describe('typography', () => {
  it('should include the correct properties', () =>
    expect(typography).toEqual(
      expect.objectContaining({
        size: expect.any(Function),
        common: expect.any(Function),
        headings: {
          xl: expect.any(Function),
          l: expect.any(Function),
          m: expect.any(Function),
          s: expect.any(Function),
        },
        captions: {
          xl: expect.any(Function),
          l: expect.any(Function),
          m: expect.any(Function),
        },
        body: {
          l: expect.any(Function),
          m: expect.any(Function),
          s: expect.any(Function),
          xs: expect.any(Function),
        },
      })
    ));

  describe('#size', () => {
    it('should return a string', () => expect(typography.size(19)).toEqual(expect.any(String)));
  });

  describe('#common', () => {
    it('should return a string', () => expect(typography.common()).toEqual(expect.any(String)));
  });

  describe('headings helpers', () => {
    const helpers = ['xl', 'l', 'm', 's'];

    helpers.forEach(key => {
      const {
        headings: { [key]: helper },
      } = typography;

      it(`heading helper "${key}" should be a string`, () =>
        expect(helper()).toEqual(expect.any(String)));
    });
  });

  describe('captions helpers', () => {
    const helpers = ['xl', 'l', 'm'];

    helpers.forEach(key => {
      const {
        captions: { [key]: helper },
      } = typography;

      it(`heading helper "${key}" should be a string`, () =>
        expect(helper()).toEqual(expect.any(String)));
    });
  });

  describe('body helpers', () => {
    const helpers = ['l', 'm', 's', 'xs'];

    helpers.forEach(key => {
      const {
        body: { [key]: helper },
      } = typography;

      it(`heading helper "${key}" should be a string`, () =>
        expect(helper()).toEqual(expect.any(String)));
    });
  });
});
