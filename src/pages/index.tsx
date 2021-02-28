import { useCallback, useState } from 'react';
import Head from 'next/head';
import { RiSearch2Line } from 'react-icons/ri';
import { HiOutlineAdjustments } from 'react-icons/hi';

import Card from '../components/Card';

import {
  Container,
  InputContainer,
  SearchBar,
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
