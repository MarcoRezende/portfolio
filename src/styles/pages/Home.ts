import styled, { css } from 'styled-components';

interface InputProps {
  inputFocused: boolean;
}

export const Container = styled.main`
  height: 100%;
  padding: 3rem 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 5rem;
    color: ${props => props.theme.colors.text.primary};
    position: relative;

    &::after {
      content: '';
      height: 3rem;
      width: 100%;
      top: 50%;
      display: block;
      position: absolute;
      background: #29756e;
      z-index: -9;
    }
  }

  p {
    font-size: 1.6rem;
    text-decoration: underline;
    font-style: italic;
  }
`;

export const InputContainer = styled.div<InputProps>`
  background: #131215;
  box-shadow: 0 5px 20px -5px rgb(0 0 0 / 50%);
  border: 3px solid transparent;
  width: 100%;
  height: 5rem;
  padding: 1rem;
  margin: 1.5rem 0;
  border-radius: 20px;

  display: flex;
  align-items: center;

  transition: border 0.2s;

  ${props =>
    props.inputFocused &&
    css`
      border: 3px solid #893d8c;
    `}

  &:focus {
    box-shadow: 0 5px 0 #000;
  }

  input {
    height: 100%;
    background: transparent;
    border: 0;
    color: #fff;

    display: flex;
    flex: 1;

    &:focus {
      outline: 0;
    }
  }

  svg {
    stroke: #d9c0de;
    width: 3rem;
    height: auto;
    margin-right: 1rem;
  }
`;
