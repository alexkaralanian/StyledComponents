import styled from 'styled-components';

const Button = styled.button`
  color: white;
  background: ${(props) => (props.secondary ? 'black' : '#f8049c')};
  font-weight: bold;
  padding: 8px;
  box-shadow: none;
  border-radius: 4px;
  font-size: 1em;
  border: none;
  width: 100%;
  display: block;
  white-space: none;

  &:disabled {
    background: #eee;
    color: #666;
  }
`;

export { Button };
