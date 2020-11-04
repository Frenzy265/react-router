import styled from 'styled-components/macro';

const Container = styled.header`
  min-height: 80px;
  color: white;
  margin: 0 auto;
  background: darkgreen;
  text-align: center;
`;

const Headline = styled.h1`
  color: white;
  padding: auto;
`;

function Header() {
  return (
    <>
      <Container>
        <Headline>Wishlist</Headline>
      </Container>
    </>
  );
}

export default Header;
