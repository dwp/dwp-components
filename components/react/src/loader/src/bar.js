import styled from 'styled-components';

const Bar = styled.div`
  position: relative;
  height: 4px;
  display: block;
  width: 30%;
  max-width: 300px;
  left: 50%;
  background-color: ${({ theme }) => theme.palette.display.grey2};
  border-radius: 2px;
  background-clip: padding-box;
  margin: 0 0 0 -147px;
  overflow: hidden;
`;

Bar.displayName = 'Loader.Bar';

export default Bar;
