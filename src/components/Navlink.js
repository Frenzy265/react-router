import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const Navlink = styled(Link)`
  background: purple;
  fill: white;
  border-radius: 50%;
  font-size: 3rem;
  width: 50px;
  height: 50px;
  border: none;
  cursor: pointer;
  box-shadow: 5px 10px 20px pink;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 10px;
  right: 10px;
`;

export default Navlink;
