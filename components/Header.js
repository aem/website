import styled from 'styled-components';
import { textColorPrimary, textSizeHuge } from 'styles';
import Naivgation from './Navigation';
import { H2 } from 'lib';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  return (
    <StyledHeader>
      <H2>Adam Markon</H2>
      <Naivgation />
    </StyledHeader>
  );
};

export default Header;
