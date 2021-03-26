import styled, { css, keyframes } from 'styled-components';
import { darken, ellipsis } from 'polished';
import Select from 'react-select';
import { motion } from 'framer-motion';
import { Form } from '@unform/web';
import SimpleBar from 'simplebar-react';

import Profile from '../../components/Profile';
import Contacts from '../../components/Contacts';
import Card from '../../components/Card';
import OutsideClickWrapper from '../../components/OutsideClickWrapper';
import Img from '../../components/Img';

interface SearchBarProps {
  isSearchBarFocused: boolean;
  inputFocused: boolean;
}

interface CardContainerReflectionProps {
  color: string;
}

const searchBarContainerExpandAnimation = keyframes`
  from { width: 4rem };
  to { width: 100% }
`;

const cardCoverVisibleAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1.2); }
`;

const cardCoverHideAnimation = keyframes`
  from { transform: scale(1.2); }
  to {  transform: scale(1); }
`;

const profileInAnimation = keyframes`
  from { transform: translateX(-20px); opacity: 0 }
  to { visibility: visible; transform: translateX(0); opacity: 1 }
`;

const contactsInAnimation = keyframes`
  from { transform: translateX(20px); opacity: 0 }
  to { visibility: visible; transform: translateX(0); opacity: 1 }
`;

export const Container = styled.div`
  height: 100%;

  display: grid;
  grid-template-columns: 0 100% 0;
  overflow: hidden;

  @media (min-width: 960px) {
    grid-template-columns: 30rem 1fr 0;
  }

  @media (min-width: 1080px) {
    grid-template-columns: 30rem 1fr 25rem;
  }
`;

export const Main = styled(SimpleBar)`
  height: 100%;
  padding: 0 2rem 4rem;
  z-index: 2;
  overflow: hidden auto;

  @media (min-width: 960px) {
    box-shadow: 0 0 15px -5px rgb(0 0 0 / 39%);
    padding: 0 10rem 4rem;
  }

  .simplebar-content {
    display: flex;
    align-items: center;
    flex-direction: column;

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
  }
`;

export const UserProfile = styled(Profile)`
  visibility: hidden;

  @media (min-width: 960px) {
    animation: ${profileInAnimation} 1s forwards;
  }
`;

export const UserContacts = styled(Contacts)`
  visibility: hidden;

  @media (min-width: 1080px) {
    animation: ${contactsInAnimation} 1s forwards;
  }
`;

export const CustomForm = styled(Form)`
  margin: 2rem 0;

  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  @media (min-width: 550px) {
    flex-direction: row;
    position: relative;
  }
`;

export const SearchBar = styled(OutsideClickWrapper)<SearchBarProps>`
  background: #131215;
  box-shadow: 0 5px 20px -5px rgb(0 0 0 / 50%);
  border: 3px solid transparent;
  width: 100%;
  height: 4rem;
  margin-bottom: 1rem;

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

  @media (min-width: 550px) {
    width: 4rem;
    max-width: 22rem;
    margin: 0 0 0 0.8rem;

    ${props =>
      props.isSearchBarFocused &&
      css`
        animation: ${searchBarContainerExpandAnimation} 0.5s forwards;
      `}
  }

  &:focus {
    box-shadow: 0 5px 0 #000;
  }

  svg {
    stroke: #d9c0de;
    width: 2.5rem;
    height: auto;
    margin: 0 1rem;

    @media (min-width: 550px) {
      ${props =>
        !props.isSearchBarFocused &&
        css`
          margin: 0;
        `}
    }
  }

  input {
    height: 100%;
    background: transparent;
    border: 0;
    color: #fff;
    font-size: 1.2rem;
    margin-left: 1rem;

    display: flex;
    flex: 1;

    @media (min-width: 550px) {
      ${props =>
        !props.isSearchBarFocused &&
        css`
          display: none;
        `}

      &:focus {
        outline: 0;
      }
    }
  }
`;

export const FilterBar = styled(motion.div)`
  position: relative;
  display: grid;
  grid-template-columns: 4rem repeat(3, minmax(0, 10rem));
  width: 100%;
  grid-gap: 0.8rem;

  @media (min-width: 550px) {
    position: initial;
  }

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

  opacity: 0;
  height: 0;
  overflow: hidden;

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
  }
`;

export const CardsGrid = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  grid-gap: 1rem;

  @media (min-width: 500px) {
    grid-template-columns: repeat(auto-fit, 22rem);
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
    grid-gap: 4rem;
    padding-right: 2rem;
  }
`;

export const CustomCard = styled(Card)<CardContainerReflectionProps>`
  width: 30rem;
  box-shadow: 0 21px 15px -14px #000;

  > div {
    width: 100%;
  }

  @media (min-width: 500px) {
    width: 22rem;
  }

  @media (min-width: 960px) {
    width: 100%;
    box-shadow: none;

    .ignore {
      height: 0;
    }

    .reflection:nth-of-type(1) {
      height: 100%;
      width: 100%;
      bottom: -2rem;
      left: 2rem;
      box-shadow: 0 -9px 5px -10px rgb(0 0 0 / 60%);
      ${props =>
        props.color &&
        css`
          background: ${props.color};
        `}
    }

    .reflection:nth-of-type(2),
    .reflection:nth-of-type(3) {
      display: none;
    }
  }
`;

export const CardContent = styled.div`
  @media (min-width: 960px) {
    box-shadow: none;
    position: relative;
    height: 18rem;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
`;

export const CardCover = styled(Img)`
  object-fit: cover;
  object-position: center;

  width: 100%;
  height: 25rem;

  @media (min-width: 500px) {
    height: 18rem;
  }

  @media (min-width: 960px) {
    position: absolute;
    bottom: 0;
    transform: scale(1);

    animation: ${cardCoverHideAnimation} 0.5s forwards;

    ${CardContent}:hover & {
      animation: ${cardCoverVisibleAnimation} 1s forwards;
    }
  }
`;

export const CardDetails = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  height: 10rem;

  @media (min-width: 960px) {
    text-align: justify;
    width: 100%;
    height: auto;
    background: #1a191d;
    box-shadow: 0 1px 20px 0px rgb(0 0 0 / 78%);
    transform: translateY(10px);
    opacity: 0;
    visibility: hidden;

    transition: transform 0.5s ease, opacity 0.3s ease, visibility 0.6s ease;

    ${CardContent}:hover & {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;

      transition: transform 0.5s ease, opacity 0.3s ease visibility 0.3s ease;
    }
  }

  h2 {
    font-size: 2rem;

    @media (min-width: 500px) {
      font-size: 1.4rem;
    }
  }

  p {
    font-size: 1.2rem;
    ${ellipsis('100%', 3)}

    @media (min-width: 960px) {
      ${ellipsis('100%', 5)}
    }
  }
`;
