import styled from 'styled-components/macro';

const DangerButton = styled.button`
  background: red;
  fill: white;
  border-radius: 50%;
  /* font-size: 3rem; */
  width: 50px;
  height: 50px;
  border: none;
  cursor: pointer;
  box-shadow: 5px 10px 20px darkred;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

DangerButton.defaultProps = {
  type: 'button',
};

export default DangerButton;
