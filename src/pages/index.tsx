import { useCallback, useState } from 'react';
import Head from 'next/head';
import { RiSearch2Line } from 'react-icons/ri';
import { HiOutlineAdjustments } from 'react-icons/hi';

import Card from '../components/Card';

import {
  Container,
  InputContainer,
  SearchBar,
  FilterContainer,
  FormGroup,
  SelectGroup,
  CustomCard,
  CardCover,
  CardDetails,
} from '../styles/pages/Home';

const Home: React.FC = () => {
  const [inputFocused, setInputFocused] = useState(false);

  const handleOnFocus = useCallback(() => {
    setInputFocused(true);
  }, []);

  const handleOnBlur = useCallback(() => {
    setInputFocused(false);
  }, []);

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
          <button id="filter">
            <HiOutlineAdjustments />
          </button>

          <button>Todos</button>
          <button className="active">Pessoais</button>
          <button>Clones</button>

          <FilterContainer>
            <FormGroup>
              <h2>Filtrar por data</h2>

              <SelectGroup>
                <div>
                  <input
                    id="newest"
                    type="radio"
                    value="newest"
                    name="sortByDate"
                  />
                  <label for="newest">Mais novos</label>
                </div>

                <div>
                  <input
                    id="oldest"
                    type="radio"
                    value="oldest"
                    name="sortByDate"
                  />
                  <label for="oldest">Antigos</label>
                </div>
              </SelectGroup>
            </FormGroup>

            <FormGroup>
              <h2>Filtrar por tag</h2>
              <select>
                <option value="newest">Mais novos</option>
                <option value="oldest">Antigos</option>
              </select>
            </FormGroup>

            <FormGroup>
              <h2>Status</h2>
              <select>
                <option value="newest">Mais novos</option>
                <option value="oldest">Antigos</option>
              </select>
            </FormGroup>
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
