import styled from 'styled-components';

export const Button = styled.button`
  background-color: #736ced;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  margin-left: 10px;
  border-radius: 3px;
  &:hover {
    background-color: #9f9fed;
  }
`;

export const Input = styled.input`
  width: 70px;
  padding: 15px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 3px;
  &:focus {
    outline: none;
    border-color: #9f9fed;
  }
`;

export const Label = styled.label`
  display: inline-block;
  font-size: 18px;
  margin-right: 10px;
  vertical-align: middle;
`;
