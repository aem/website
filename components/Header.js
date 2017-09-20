import styled from 'styled-components';
import { textColorPrimary, textSizeHuge } from 'styles';

import { H2 } from 'lib';

const StyledHeader = styled.header`
  display: flex;

  h2 {
    align-self: start;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <H2>Adam Markon</H2>
    </StyledHeader>
  );
};

export default Header;
