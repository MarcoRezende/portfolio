import styled, { css, keyframes } from 'styled-components';
import { darken } from 'polished';
import Select from 'react-select';
import { motion } from 'framer-motion';
import { Form } from '@unform/web';

import Card from '../../components/Card';
import OutsideClickWrapper from '../../components/OutsideClickWrapper';

interface SearchBarProps {
  isSearchBarFocused: boolean;
  inputFocused: boolean;
}

export const Container = styled.main`
  height: 100%;
  padding: 0 2rem 4rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden auto;

  h1 {
    font-size: 4rem;
    color: ${props => props.theme.colors.text.primary};
    position: relative;

    &::after {
      content: '';
      height: 2rem;
      width: 100%;
      top: 50%;
      display: block;
      position: absolute;
      background: #29756e;
      z-index: -9;
    }
  }

  > p {
    font-size: 1.6rem;
    text-decoration: underline;
    font-style: italic;
    display: none;
  }
`;

export const CustomForm = styled(Form)<CustomFormProps>`
  margin: 1rem 0;

  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column-reverse;
  }
`;

export const SearchBar = styled(OutsideClickWrapper)<SearchBarProps>`
  background: #131215;
  box-shadow: 0 5px 20px -5px rgb(0 0 0 / 50%);
  border: 3px solid transparent;
  width: 4rem;
  height: 4rem;

  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border 0.2s;

  ${props => props.isSearchBarFocused && css``}

  ${props =>
    props.inputFocused &&
    css`
      border: 3px solid #893d8c;
    `}

  @media (max-width: 500px) {
    width: 100%;
  }

  &:focus {
    box-shadow: 0 5px 0 #000;
  }

  svg {
    stroke: #d9c0de;
    width: 2.5rem;
    height: auto;

    ${props =>
      props.isSearchBarFocused &&
      css`
        margin: 0 1rem;
      `}

    @media (max-width: 500px) {
      margin: 0 1rem;
    }
  }

  input {
    display: none;

    height: 100%;
    background: transparent;
    border: 0;
    color: #fff;
    font-size: 1.2rem;
    margin-left: 1rem;

    flex: 1;

    ${props =>
      props.isSearchBarFocused &&
      css`
        display: flex;
      `}

    @media (max-width: 500px) {
      display: flex;
    }

    &:focus {
      outline: 0;
    }
  }
`;

export const FilterBar = styled(motion.div)<FilterBarProps>`
  position: relative;
  display: grid;
  grid-template-columns: 4rem repeat(3, minmax(0, 10rem));
  width: 100%;
  grid-gap: 0.8rem;

  ${props => props.shouldDisappear && css``}

  button#filter,
  button.active {
    background: #6443e4;
    box-shadow: 0 7px 15px -2px rgb(0 0 0 / 70%);
  }

  button#filter {
    color: #1d0f50;
    position: relative;
    border-radius: 50%;
    width: 100%;
    transition-property: background, border-color;
    transition-duration: 0.5s;

    &:hover {
      border-color: ${darken(0.05, '#6443e4')};
      background: ${darken(0.05, '#6443e4')};
      transition: all 0.5s;
    }

    svg {
      transform: rotate(90deg);
      width: auto;
      height: 2.3rem;
    }
  }

  > button[type='submit'] label {
    font-size: 1.4rem;
    height: 4rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Button = styled.button`
  height: 4rem;
  background: transparent;
  padding: 0.2rem;
  border: 2px solid #6443e4;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: 800;
  color: ${props => props.theme.colors.text.primary};

  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const FilterContainer = styled(motion.div)`
  box-shadow: 0 15px 15px -5px rgb(0 0 0 / 67%);
  position: absolute;
  padding: 2rem;
  top: calc(100% + 2rem);
  width: 100%;
  max-width: 35rem;
  z-index: 1;
  border-radius: 10px;
  background: #171212;

  &:before {
    content: '';
    bottom: 100%;
    width: 0;
    left: 1rem;
    position: absolute;
    height: 0;
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
    border-bottom: 1.2rem solid #171212;
  }
`;

export const CustomSelect = styled(Select)`
  .custom-select__control {
    background: #171212;
    color: #100f13;
    font-size: 1.2rem;
    border: 2px solid #3b3a42;
    box-shadow: none;
    transition: border-color 0.5s;

    @media (max-width: 500px) {
    }

    &:hover {
      border-color: #6443e4;
    }
  }

  .custom-select__menu {
    background: #171212;
    color: ${props => props.theme.colors.text.primary};
  }

  .custom-select__option {
    cursor: pointer;
    font-size: 1.2rem;

    @media (max-width: 500px) {
    }
  }

  .custom-select__option--is-focused {
    background: #6443e4;
  }
`;

export const SubmitButtonContainer = styled(motion.div)`
  button[type='submit'] {
    background: #6443e4;
    border-color: #6443e4;
    width: 100%;
    margin-top: 2rem;
    transition-property: border, background;
    transition-duration: 0.5s;

    &:hover {
      background: ${darken(0.03, '#6443e4')};
      border-color: ${darken(0.03, '#6443e4')};
    }
  }
`;

export const FormGroup = styled(motion.div)`
  & + & {
    margin-top: 1rem;
  }

  h2 {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 500;
  }

  > h2:after {
    content: '';
    background: #2d2929;
    height: 1px;
    width: 100%;
    margin-top: 0.5rem;
  }
`;

export const SelectGroup = styled.div`
  display: grid;
  grid-template-columns: 50% 1fr;
  grid-column-gap: 1rem;

  button label {
    font-size: 1.2rem;
    height: 4rem;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 500px) {
    }
  }
`;

export const CardsGrid = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 22rem));
  justify-content: center;
  grid-gap: 1rem;

  @media (max-width: 500px) {
    grid-template-columns: auto;
  }
`;

export const CustomCard = styled(Card)`
  width: 22rem;
  box-shadow: 0 21px 15px -14px #000;

  > div {
    width: 100%;
  }

  @media (max-width: 500px) {
    width: 30rem;
  }
`;

export const CardCover = styled.div`
  background-image: url('https://marcorezendebackup.github.io/portfolio/imgs/matching-game-cover-medium.png');
  background-size: cover;
  background-position: center;

  width: 100%;
  height: 18rem;

  @media (max-width: 500px) {
    height: 25rem;
  }
`;

export const CardDetails = styled.div`
  text-align: center;
  padding: 1rem;
  height: 10rem;

  h2 {
    font-size: 1.8rem;

    @media (max-width: 500px) {
      font-size: 2rem;
    }
  }
`;
