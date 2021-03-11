import { useCallback, useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import { RiSearch2Line } from 'react-icons/ri';
import { HiOutlineAdjustments } from 'react-icons/hi';
import makeAnimated from 'react-select/animated';
import { motion } from 'framer-motion';
import { FormHandles } from '@unform/core';

import Card from '../components/Card';
import { Input, InputRadio } from '../components/FormComponents';

import {
  Container,
  CustomForm,
  SearchBar,
  FilterBar,
  Button,
  FilterContainer,
  SubmitButtonContainer,
  FormGroup,
  SelectGroup,
  CustomSelect,
  CardsGrid,
  CustomCard,
  CardCover,
  CardDetails,
} from '../styles/pages/Home';

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [inputFocused, setInputFocused] = useState(false);
  const [isFilterOpened, setIsFilterOpened] = useState(false);
  const [isSearchFocusedBar, setIsSearchFocusedBar] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('all');
  const [selectValue, setSelectValue] = useState('');
  const [animationState, setAnimationState] = useState('hidden');

  const handleOnFocus = useCallback(() => {
    setInputFocused(true);
  }, []);

  const handleOnBlur = useCallback(() => {
    setInputFocused(false);
  }, []);

  const handleIsFilterOpened = useCallback(() => {
    setAnimationState('exit');

    setIsFilterOpened(!isFilterOpened);
  }, [isFilterOpened, animationState]);

  const handleIsSearchBarFocused = useCallback(() => {
    setIsSearchFocusedBar(true);
  }, [isSearchFocusedBar]);

  const handleIsSearchBarBlurred = useCallback(() => {
    setIsSearchFocusedBar(false);
  }, [isSearchFocusedBar]);

  const handleSelectValue = useCallback(value => {
    setSelectValue(JSON.stringify(value));
  }, []);

  const handleFilterOnSubmit = useCallback(data => {
    console.log(data);
  }, []);

  const variants = {
    filterContainer: {
      hidden: { display: 'none' },
      visible: {
        height: 'auto',
        opacity: 1,
        scale: 1,
        transition: {
          delayChildren: 0.2,
          staggerChildren: 0.1,
        },
      },
      exit: { opacity: 0, height: 0, overflow: 'hidden' },
    },
    filterItem: {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
      },
      exit: { y: 20, opacity: 0 },
    },
  };

  const radioOptions = {
    navBarItems: [
      { label: 'Todos', id: 'all', value: 'all' },
      { label: 'Pessoais', id: 'personal', value: 'personal' },
      { label: 'Clones', id: 'clone', value: 'clone' },
    ],
    sortByDate: [
      { label: 'Recentes', id: 'recent', value: 'recent' },
      { label: 'Antigos', id: 'oldest', value: 'oldest' },
    ],
    sortByStatus: [
      { label: 'Finalizado', id: 'done', value: 'done' },
      { label: 'Em Progresso', id: 'inProgress', value: 'inProgress' },
    ],
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <Container>
        <h1>Projetos</h1>
        <p>Explore</p>

        <CustomForm ref={formRef} onSubmit={handleFilterOnSubmit}>
          <SearchBar
            inputFocused={inputFocused}
            isSearchFocusedBar={isSearchFocusedBar}
            onClick={handleIsSearchBarFocused}
            onBlur={handleIsSearchBarBlurred}
          >
            <RiSearch2Line />
            <input
              type="text"
              placeholder="Pesquise um projeto"
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
            />
          </SearchBar>

          <FilterBar>
            <Button
              id="filter"
              type="button"
              onClick={() => handleIsFilterOpened()}
            >
              <HiOutlineAdjustments />
            </Button>

            <InputRadio
              btnType="submit"
              name="navBarItems"
              options={radioOptions.navBarItems}
            />

            <FilterContainer
              animate={isFilterOpened ? 'visible' : animationState}
              variants={variants.filterContainer}
            >
              <FormGroup variants={variants.filterItem}>
                <h2>Filtrar por data</h2>

                <SelectGroup>
                  <InputRadio
                    name="sortByDate"
                    options={radioOptions.sortByDate}
                    isFilterOpened={isFilterOpened}
                  />
                </SelectGroup>
              </FormGroup>

              <FormGroup variants={variants.filterItem}>
                <h2>Filtrar por tag</h2>
                <CustomSelect
                  onChange={handleSelectValue}
                  components={makeAnimated()}
                  instanceId="customSelect"
                  classNamePrefix="custom-select"
                  isMulti
                  options={[
                    { value: 'react', label: 'React' },
                    { value: 'node', label: 'Node' },
                  ]}
                />
                <Input name="select" type="hidden" value={selectValue} />
              </FormGroup>

              <FormGroup variants={variants.filterItem}>
                <h2>Status</h2>

                <SelectGroup>
                  <InputRadio
                    name="sortByStatus"
                    options={radioOptions.sortByStatus}
                    isFilterOpened={isFilterOpened}
                  />
                </SelectGroup>
              </FormGroup>

              <SubmitButtonContainer
                onClick={() => handleIsFilterOpened()}
                variants={variants.filterItem}
              >
                <Button type="submit">Filtrar</Button>
              </SubmitButtonContainer>
            </FilterContainer>
          </FilterBar>
        </CustomForm>

        <CardsGrid>
          {Array(10)
            .fill(0)
            .map(_ => (
              <CustomCard
                margin={0}
                borderRadius="8px"
                cardColor="#1a191d"
                reflectColor="#3a3742"
                reflection={3}
                distanceRate={0.9}
                applyBorderRadiusAll={false}
                darkenRate={0.31}
              >
                <div>
                  <CardCover />
                  <CardDetails>
                    <h2>Titulo</h2>
                    <p>Curta descrição</p>
                  </CardDetails>
                </div>
              </CustomCard>
            ))}
        </CardsGrid>
      </Container>
    </>
  );
};

export default Home;
