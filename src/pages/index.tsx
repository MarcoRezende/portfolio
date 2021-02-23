import { useCallback, useState } from 'react';
import Head from 'next/head';
import { RiSearch2Line } from 'react-icons/ri';

import { Container, InputContainer } from '../styles/pages/Home';

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
      </Container>
    </>
  );
};

export default Home;
