import styled from 'styled-components';
import {
  textColorBlack,
  textSizeNormal,
  pageWidth,
  lineHeight,
  catamaran
} from 'styles';

const Wrapper = styled.main`
  font-family: ${catamaran};
  letter-spacing: 0.3px;
  line-height: ${lineHeight};
  font-size: ${textSizeNormal};
  color: ${textColorBlack};
  padding: 20px 0;
  max-width: ${pageWidth};
  margin: 0 auto;
`;

export default Wrapper;
