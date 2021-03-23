import { useCallback, useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import makeAnimated from 'react-select/animated';
import { motion } from 'framer-motion';
import { FormHandles } from '@unform/core';

import { RiSearch2Line } from 'react-icons/ri';
import { HiOutlineAdjustments } from 'react-icons/hi';

import Card from '../components/Card';
import { Input, InputRadio } from '../components/FormComponents';

import {
  Container,
  Main,
  UserProfile,
  UserContacts,
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

interface ProjectProps {
  id: string;
  name: string;
  color: string;
  shortDescription: string;
  cover: {
    low: string;
    medium: string;
    high: string;
  };
}

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [inputFocused, setInputFocused] = useState(false);
  const [isFilterOpened, setIsFilterOpened] = useState(false);
  const [isSearchBarFocused, setIsSearchBarFocused] = useState(false);
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

  const handleIsSearchBarFocused = useCallback(
    state => {
      setIsSearchBarFocused(state);
    },
    [isSearchBarFocused],
  );

  const handleSelectValue = useCallback(value => {
    setSelectValue(JSON.stringify(value));
  }, []);

  const handleFilterOnSubmit = useCallback(data => {
    console.log(data);
  }, []);

  const variants = {
    searchBarContainer: {
      start: { width: '4rem' },
      end: { width: '100%' },
    },
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

  const fakeProjectsData: ProjectProps[] = [
    {
      id: '1',
      name: 'Wiki Game',
      color: '#ab418a',
      shortDescription: 'Jogo de navegador baseado no conteudo da Wikipedia.',
      cover: {
        low:
          'https://marcorezendebackup.github.io/portfolio/imgs/wiki-game-cover-low.png',
        medium:
          'https://marcorezendebackup.github.io/portfolio/imgs/wiki-game-cover-medium.png',
        high:
          'https://marcorezendebackup.github.io/portfolio/imgs/wiki-game-cover-high.png',
      },
    },
    {
      id: '2',
      name: 'My Reads',
      color: '#ab418a',
      shortDescription:
        'Aplicação para reunir e organizar livros em seções/estantes.',
      cover: {
        low: '',
        medium: '',
        high: '',
      },
    },
    {
      id: '3',
      name: 'Beats',
      color: '#ab418a',
      shortDescription:
        'Site para vender conteudo musical, como drum kits, presets para plugins e muito mais.',
      cover: {
        low: '',
        medium: '',
        high: '',
      },
    },
  ];

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Container>
        <UserProfile />

        <Main>
          <h1>Projetos</h1>
          <p>Explore</p>

          <CustomForm ref={formRef} onSubmit={handleFilterOnSubmit}>
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

            <SearchBar
              onClickOutside={() => handleIsSearchBarFocused(false)}
              onClickInside={() => handleIsSearchBarFocused(true)}
              motionAnimation
              isSearchBarFocused={isSearchBarFocused}
              inputFocused={inputFocused}
            >
              <input
                type="text"
                placeholder="Pesquise um projeto"
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
              />
              <RiSearch2Line />
            </SearchBar>
          </CustomForm>

          <CardsGrid>
            {fakeProjectsData.map(project => (
              <CustomCard
                key={'card-' + project.id}
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
                    <h2>{project.name}</h2>
                    <p>{project.shortDescription}</p>
                  </CardDetails>
                </div>
              </CustomCard>
            ))}
          </CardsGrid>
        </Main>

        <UserContacts />
      </Container>
    </>
  );
};

export default Home;
