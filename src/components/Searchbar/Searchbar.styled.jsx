import styled from 'styled-components';

const Header = styled.header`
  position: sticky;
  top: -1px;
  z-index: 1100;

  padding: 16px 0;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const Container = styled.div`
  max-width: 1440px;
  padding-right: 16px;
  padding-left: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin-right: auto;
  margin-left: auto;
  padding: 25px auto;
  height: 50px;

  border-radius: 4px;
  overflow: hidden;

  background-color: #fafafa;
`;

const SearchBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  outline: none;
  margin: 0;
  padding: 0;
  height: 50px;
  width: 50px;

  cursor: pointer;

  background-color: transparent;

  opacity: 0.6;
  transition: opacity var(--animation-duration) var(--timing-function);

  &:hover {
    opacity: 1;
  }
`;

const SearchIconWrap = styled.span`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 0;
  padding-left: 8px;

  border: none;
  outline: none;
  height: 30px;

  background-color: #fafafa;

  font: inherit;
  font-size: 20px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export { Header, Container, Form, SearchBtn, SearchIconWrap, Input };
