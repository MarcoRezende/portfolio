import styled from 'styled-components';
import { motion } from 'framer-motion';

import Img from '../../components/Img';
import Map from '../../components/Map';

const addressPrimaryHeight = '5rem';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  flex: 1;
  overflow: hidden;
`;

export const Image = styled(Img)`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
`;

export const Location = styled.div`
  position: relative;
  height: 35rem;
  background: #000;
`;

export const Address = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 4; // over map marker
`;

export const Primary = styled.div`
  height: ${addressPrimaryHeight};
  color: #383838;
  background: #e1e1e1;
  padding: 0 2rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  svg {
    height: 2.5rem;
    width: auto;
  }
`;

export const Details = styled.div`
  margin-left: 0.5rem;

  flex: 1;

  h2 {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: -0.8rem;
  }

  span {
    font-size: 1.3rem;
  }
`;

export const AddressAndContacts = styled(motion.ul)`
  list-style: none;
  width: 100%;
  padding: 2rem;

  height: 0;
  opacity: 0;
  overflow: hidden;
`;

export const Item = styled(motion.li)`
  & + & {
    margin-top: 2rem;
  }

  > .div {
    box-shadow: 0 15px 20px -5px rgb(0 0 0 / 95%);
  }

  .card-content {
    color: ${props => props.theme.colors.text.primary};
    width: 100%;
    padding: 1rem;

    display: flex;
    flex-direction: column;

    h2 {
      font-size: 1.4rem;

      display: flex;
      flex-direction: row;
      align-items: center;

      svg {
        height: 2.5rem;
        width: auto;
        margin-right: 0.5rem;
      }
    }

    span {
      font-size: 1.2rem;
    }
  }
`;

export const MapContainer = styled.div`
  padding-top: ${addressPrimaryHeight};
  height: 100%;
  overflow: hidden;
`;

export const Maps = styled(Map)``;
