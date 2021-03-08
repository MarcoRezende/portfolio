import { useCallback, useState, FormEvent } from 'react';
import Head from 'next/head';
import { RiSearch2Line } from 'react-icons/ri';
import { HiOutlineAdjustments } from 'react-icons/hi';
import makeAnimated from 'react-select/animated';
import { motion } from 'framer-motion';

import Card from '../components/Card';

import {
  Container,
  InputContainer,
  SearchBar,
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
  const [inputFocused, setInputFocused] = useState(false);
  const [isFilterOpened, setIsFilterOpened] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('all');

  const handleOnFocus = useCallback(() => {
    setInputFocused(true);
  }, []);

  const handleOnBlur = useCallback(() => {
    setInputFocused(false);
  }, []);

  const handleIsFilterOpened = useCallback(() => {
    setIsFilterOpened(!isFilterOpened);
  }, [isFilterOpened]);

  const handleCurrentNavItem = useCallback((id: string) => {
    setActiveNavItem(id);
  }, []);

  const handleFilterOnSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
  }, []);

  const variants = {
    container: {
      hidden: { opacity: 0, height: 0, overflow: 'hidden' },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.2,
        },
      },
    },
    item: {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <Container>
        <h1>Projetos</h1>
        <p>Explore</p>

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
          <button id="filter" onClick={() => handleIsFilterOpened()}>
            <HiOutlineAdjustments />
          </button>

          <button
            onClick={() => handleCurrentNavItem('all')}
            className={activeNavItem === 'all' && 'active'}>
            Todos
          </button>
          <button
            onClick={() => handleCurrentNavItem('personal')}
            className={activeNavItem === 'personal' && 'active'}>
            Pessoais
          </button>
          <button
            onClick={() => handleCurrentNavItem('clone')}
            className={activeNavItem === 'clone' && 'active'}>
            Clones
          </button>

          <FilterContainer
            onSubmit={handleFilterOnSubmit}
            animate={isFilterOpened ? 'visible' : 'hidden'}
            variants={variants.container}
          >
            <FormGroup variants={variants.item}>
              <h2>Filtrar por data</h2>

              <SelectGroup>
                <div>
                  <input
                    id="newest"
                    type="radio"
                    value="newest"
                    name="sortByDate"
                  />
                  <label htmlFor="newest">Mais novos</label>
                </div>

                <div>
                  <input
                    id="oldest"
                    type="radio"
                    value="oldest"
                    name="sortByDate"
                  />
                  <label htmlFor="oldest">Antigos</label>
                </div>
              </SelectGroup>
            </FormGroup>

            <FormGroup variants={variants.item}>
              <h2>Filtrar por tag</h2>
              <CustomSelect
                components={makeAnimated()}
                instanceId="customSelect"
                classNamePrefix="custom-select"
                isMulti
                options={[
                  { value: 'react', label: 'React' },
                  { value: 'node', label: 'Node' },
                ]}
              />
            </FormGroup>

            <FormGroup variants={variants.item}>
              <h2>Status</h2>

              <SelectGroup>
                <div>
                  <input
                    id="done"
                    type="radio"
                    value="done"
                    name="sortByStatus"
                  />
                  <label htmlFor="done">Finalizado</label>
                </div>

                <div>
                  <input
                    id="inProgress"
                    type="radio"
                    value="inProgress"
                    name="sortByStatus"
                  />
                  <label htmlFor="inProgress">Em progresso</label>
                </div>
              </SelectGroup>
            </FormGroup>

            <SubmitButtonContainer
              onClick={() => handleIsFilterOpened()}
              variants={variants.item}
              type="submit"
            >
              <button type="submit">Filtrar</button>
            </SubmitButtonContainer>
          </FilterContainer>
        </SearchBar>

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
