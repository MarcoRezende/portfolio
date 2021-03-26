import { useCallback, useState } from 'react';

import { RiMapPinFill as MarkerIcon } from 'react-icons/ri';
import { IoIosArrowDown as ArrowDownIcon } from 'react-icons/io';
import { FaMapSigns as AddressIcon } from 'react-icons/fa';
import { HiMail as ContactsIcon } from 'react-icons/hi';

import Card from './Card';

import {
  Container,
  ImageContainer,
  Image,
  Location,
  Address,
  Primary,
  Details,
  AddressAndContacts,
  Item,
  MapContainer,
  Maps,
} from '../styles/components/Contacts';

interface InfoProps {
  address?: {
    country?: string;
    state?: string;
    city?: string;
    street?: string;
    number?: number;
    cep?: string;
  };
  contacts?: {
    landline?: string;
    phone?: string;
    email?: string;
  };
}

const fakeData: InfoProps = {
  address: {
    country: 'Brasil',
    state: 'São Paulo',
    city: 'Santana de Parnaíba',
    street: 'Av. Aloísio Magalhães',
    number: 211,
    cep: '06537-030',
  },
  contacts: {
    landline: '(11) 4157-2960',
    phone: '(11) 95759-9454',
    email: 'marcorezende@outlook.com.br',
  },
};

const Contacts: React.FC<InfoProps> = ({ address, contacts }) => {
  const [isListOpened, setIsListOpened] = useState<boolean>(false);

  const switcher = useCallback(() => {
    setIsListOpened(!isListOpened);
  }, [isListOpened]);

  const sources = {
    low: 'https://loremflickr.com/600/800/city',
    medium: 'https://loremflickr.com/400/600/city',
    high: 'https://loremflickr.com/200/4200/city',
  };

  const variants = {
    listContainer: {
      hidden: { opacity: 0, height: 0, overflow: 'hidden' },
      visible: {
        height: 'auto',
        opacity: 1,
        overflow: 'visible',
        transition: {
          delayChildren: 0.2,
          staggerChildren: 0.1,
        },
      },
    },
    listItem: {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <Container>
      <ImageContainer>
        <Image sources={sources} />
      </ImageContainer>

      <Location>
        <Address>
          <Primary>
            <MarkerIcon />

            <Details>
              <h2>
                {address.country} | {address.state}
              </h2>
              <span>{address.city}</span>
            </Details>

            <ArrowDownIcon onClick={() => switcher()} />
          </Primary>

          <AddressAndContacts
            animate={isListOpened ? 'visible' : 'hidden'}
            variants={variants.listContainer}
          >
            <Item variants={variants.listItem}>
              <Card
                reflection={1}
                borderRadius={'5px'}
                cardColor={'#e1e1e1'}
                applyBorderRadiusAll={true}
              >
                <h2>
                  <AddressIcon />
                  Endereço
                </h2>
                <span>
                  {address.street}, Nº{address.number}
                </span>
                <span>CEP: {address.cep}</span>
              </Card>
            </Item>

            <Item variants={variants.listItem}>
              <Card
                reflection={1}
                borderRadius={'5px'}
                cardColor={'#e1e1e1'}
                applyBorderRadiusAll={true}
              >
                <h2>
                  <ContactsIcon />
                  Contatos
                </h2>
                <span>{contacts.email}</span>
                <span>Tel.: {contacts.landline}</span>
                <span>Cel.: {contacts.phone}</span>
              </Card>
            </Item>
          </AddressAndContacts>
        </Address>

        <MapContainer>
          <Maps />
        </MapContainer>
      </Location>
    </Container>
  );
};

Contacts.defaultProps = {
  ...fakeData,
};

export default Contacts;
