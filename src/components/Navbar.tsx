import Link from 'next/link';
import { FaMailBulk } from 'react-icons/fa';
import { BiHomeAlt, BiUser } from 'react-icons/bi';

import { Container, Links } from '../styles/components/Navbar';

const Navbar: React.FC = () => {
  return (
    <Container>
      <Links>
        <Link href="/profile">
          <a>
            <BiUser />
          </a>
        </Link>
        <Link href="/">
          <a id="home-link">
            <BiHomeAlt />
          </a>
        </Link>
        <Link href="/contacts">
          <a>
            <FaMailBulk />
          </a>
        </Link>
      </Links>
    </Container>
  );
};

export default Navbar;
