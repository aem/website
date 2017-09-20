import styled from 'styled-components';
import { defaultLineHeight, textColorBlack, textSizeSmall } from 'styles';

const Code = styled.code`
  font-family: 'Oxygen Mono', Monaco, monospace;
  letter-spacing: -0.5px;
  font-size: ${textSizeSmall};
  line-height: ${defaultLineHeight};
  color: ${textColorBlack};
`;

export default Code;
