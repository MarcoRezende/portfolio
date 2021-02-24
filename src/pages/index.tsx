import { useCallback, useState } from 'react';
import Head from 'next/head';
import { RiSearch2Line } from 'react-icons/ri';
import { HiOutlineAdjustments } from 'react-icons/hi';

import { Container, InputContainer, SearchBar } from '../styles/pages/Home';

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
      </Container>
    </>
  );
};

export default Home;
