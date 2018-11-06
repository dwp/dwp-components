import * as Chart from 'react-vis';

export const withThemeProps = WrappedComponent => fn => {
  console.log(WrappedComponent);
  return ({ theme, ...props }) => {
    console.log('here', fn, theme, props);
    return (
      <WrappedComponent {...props} {...fn(theme)}/>
    );
  }
};

export default Chart;
