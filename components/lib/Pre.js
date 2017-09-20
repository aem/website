import styled from 'styled-components';
import { textColorBlack, textSizeSmall, lineHeight } from 'styles';

const Pre = styled.pre`
  font-family: 'Oxygen Mono', Monaco, monospace;
  letter-spacing: -0.5px;
  font-size: ${textSizeSmall};
  line-height: ${lineHeight};
  color: ${textColorBlack};
`;

export default Pre;
