import Link from 'next/link';
import { FaHome, FaUser, FaFileContract } from 'react-icons/fa';

import { Container } from '../styles/components/Navbar';

const Navbar: React.FC = () => {
  return (
    <Container>
      <Link href="/profile">
        <a>
          <FaUser />
        </a>
      </Link>
      <Link href="/">
        <a>
          <FaHome />
        </a>
      </Link>
      <Link href="/contacts">
        <a>
          <FaFileContract />
        </a>
      </Link>
    </Container>
  );
};

export default Navbar;
