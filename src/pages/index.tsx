import { useCallback, useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import { RiSearch2Line } from 'react-icons/ri';
import { HiOutlineAdjustments } from 'react-icons/hi';
import makeAnimated from 'react-select/animated';
import { motion } from 'framer-motion';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import Card from '../components/Card';
import InputRadio, { Input } from '../components/FormComponents';

import {
  Container,
  InputContainer,
  SearchBar,
  Button,
  FilterContainer,
  SubmitButtonContainer,
  FormGroup,
  SelectGroup,
  CustomSelect,
  CustomCard,
  CardCover,
  CardDetails,
} from '../styles/pages/Home';

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const [inputFocused, setInputFocused] = useState(false);
  const [isFilterOpened, setIsFilterOpened] = useState(false);
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

  const handleSelectValue = useCallback(value => {
    setSelectValue(JSON.stringify(value));
  }, []);

  const handleFilterOnSubmit = useCallback(data => {
    console.log(data);
  }, []);

  const variants = {
    container: {
      hidden: { display: 'none' },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.2,
        },
      },
      exit: { opacity: 0, height: 0, overflow: 'hidden' },
    },
    item: {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
      },
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

        <Form ref={formRef} onSubmit={handleFilterOnSubmit}>
          <InputContainer inputFocused={inputFocused}>
            <RiSearch2Line />
            <input
              type="text"
              placeholder="Pesquise um projeto"
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
            />
          </InputContainer>

          <SearchBar>
            <Button
              id="filter"
              type="button"
              onClick={() => handleIsFilterOpened()}
            >
              <HiOutlineAdjustments />
            </Button>

            <InputRadio btnType="submit" name="navBarItems" options={radioOptions.navBarItems} />

            <FilterContainer
              animate={isFilterOpened ? 'visible' : animationState}
              variants={variants.container}
            >
              <FormGroup variants={variants.item}>
                <h2>Filtrar por data</h2>

                <SelectGroup>
                  <InputRadio
                    name="sortByDate"
                    options={radioOptions.sortByDate}
                    isFilterOpened={isFilterOpened}
                  />
                </SelectGroup>
              </FormGroup>

              <FormGroup variants={variants.item}>
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

              <FormGroup variants={variants.item}>
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
                variants={variants.item}
              >
                <Button type="submit">Filtrar</Button>
              </SubmitButtonContainer>
            </FilterContainer>
          </SearchBar>
        </Form>

        <CustomCard
          margin={1.6}
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
      </Container>
    </>
  );
};

export default Home;
