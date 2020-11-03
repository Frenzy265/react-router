import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Container = styled.div`
  box-shadow: 5px 10px 20px pink;
  border-radius: 15px;
  padding: 20px;
`;

function WishlistItem({ title }) {
  return (
    <>
      <Container>{title}</Container>
    </>
  );
}

export default WishlistItem;

WishlistItem.propTypes = {
  title: PropTypes.string.isRequired,
};
