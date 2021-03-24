import { RiMapPinFill as MarkerIcon } from 'react-icons/ri';
import { IoIosArrowDown as ArrowDownIcon } from 'react-icons/io';
import { FaMapSigns as AddressIcon } from 'react-icons/fa';
import { HiMail as ContactsIcon } from 'react-icons/hi';

import {
  Container,
  Overlay,
  PlaceholderImage,
  Location,
  Address,
  AddressPrimary,
  AddressAndContacts,
  Item,
  MapContainer,
  Map,
} from '../styles/components/Contacts';

const Contacts: React.FC = () => {
  const sources = {
    low: 'https://loremflickr.com/600/800/city',
    medium: 'https://loremflickr.com/400/600/city',
    high: 'https://loremflickr.com/200/4200/city',
  };
  return (
    <Container>
      <Overlay>
        <PlaceholderImage sources={sources} />

        <Location>
          <Address>
            <MarkerIcon />

            <AddressPrimary>
              <h2>State</h2>
              <span>City</span>
            </AddressPrimary>

            <ArrowDownIcon />

            <AddressAndContacts>
              <Item>
                <h2>
                  <AddressIcon />
                  Endereço
                </h2>
                <span>Street name, Nº1</span>
                <span>CEP: 00000000</span>
              </Item>

              <Item>
                <h2>
                  <ContactsIcon />
                  Contatos
                </h2>
                <span>marco@email</span>
                <span>Tel.: (11) 4157-2960</span>
                <span>Cel.: (11) 94632-1887</span>
              </Item>
            </AddressAndContacts>
          </Address>

          <MapContainer>
            <Map />
          </MapContainer>
        </Location>
      </Overlay>
    </Container>
  );
};

export default Contacts;
