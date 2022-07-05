import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-weight: ${props => props.theme.fontWeights.bold};
`;

export const Input = styled.input`
  margin-top: 5px;
  padding: 3px;
  width: 200px;
  font-size: ${props => props.theme.fontSizes.m};
`;

export const Button = styled.button`
  padding: 5px 10px;
  margin: 5px 10px;
  font-size: ${props => props.theme.fontSizes.m};
  text-transform: capitalize;
  background-color: ${props => props.theme.colors.primary};
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  cursor: pointer;
  :hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;
