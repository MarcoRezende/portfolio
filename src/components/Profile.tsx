import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';

import { FiGithub, FiDribbble } from 'react-icons/fi';
import { RiLinkedinLine } from 'react-icons/ri';
import { SiMailDotRu, SiJavascript } from 'react-icons/si';
import { IoLanguageSharp } from 'react-icons/io5';
import { HiShieldExclamation } from 'react-icons/hi';

interface ProfileProps {
  className?: string;
}

import 'simplebar/dist/simplebar.min.css';

import {
  Container,
  Header,
  Background,
  Avatar,
  UserDetails,
  Socials,
  UserInformation,
  Achievements,
  List,
  ListItem,
  ListItemComplex,
  SkillSummary,
  ArrowDownIcon,
} from '../styles/components/Profile';

const variants = {
  skillSummaryContainer: {
    hidden: {
      height: 0,
      opacity: 0,
      overflow: 'hidden',
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
    visible: {
      height: 'auto',
      opacity: 1,
      overflow: 'visible',
    },
  },
  skillSummaryItem: {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  },
  arrowDownIcon: { rotate: { transform: 'rotate(180deg)' } },
};

const Profile: React.FC<ProfileProps> = ({ className = '' }) => {
  const [openedSkill, setOpenedSkill] = useState<string[]>([]);
  const user = {
    name: 'Marco Rezende dos Santos',
    role: 'Desenvolvedor Web',
    email: 'marco@email.com',
    skills: {
      programmingLanguages: [
        {
          name: 'Javascript',
          knowledgeRate: 70,
          knowledgeSummary:
            'Domínio dos fundamentos da linguagem: variáveis, funções, loops, promises.',
        },
        {
          name: 'HTML',
          knowledgeRate: 90,
          knowledgeSummary:
            'Correta aplicação das diversas tags html, de forma semântica e respeitando a acessibilidade.',
        },
      ],
      tools: [
        {
          name: 'Typescript',
          knowledgeRate: 75,
          knowledgeSummary:
            'Uso contínuo em aplicações desenvolvidas com javascript.',
        },
      ],
    },
    availability: true,
  };

  const handleOpenedSkill = useCallback(
    skillId => {
      openedSkill.includes(skillId)
        ? setOpenedSkill([])
        : setOpenedSkill([skillId]);
    },
    [openedSkill],
  );

  return (
    <Container className={className}>
      <Header>
        <Background>
          <Avatar />
        </Background>

        <UserDetails>
          <h2>{user.name}</h2>
          <span>{user.role}</span>

          <Socials>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <RiLinkedinLine />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FiGithub />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FiDribbble />
            </a>
          </Socials>
        </UserDetails>
      </Header>

      <UserInformation>
        {user.availability && <p>Disponível para qualquer horário e região.</p>}

        <List>
          <ListItem>
            <SiMailDotRu />
            {user.email}
          </ListItem>
          <ListItem>
            <IoLanguageSharp />
            Ingles Intermediário
          </ListItem>
        </List>

        <Achievements>
          <h2>Linguagens.</h2>

          <List>
            {user.skills.programmingLanguages.map(skill => (
              <ListItemComplex
                key={skill.name}
                knowledgeRate={skill.knowledgeRate}
              >
                <SiJavascript />
                <span>{skill.name}</span>
                <div />
                <ArrowDownIcon
                  onClick={() => handleOpenedSkill(skill.name)}
                  shouldAnimate={openedSkill.includes(skill.name)}
                />
                <SkillSummary
                  animate={
                    openedSkill.includes(skill.name) ? 'visible' : 'hidden'
                  }
                  transition={{ duration: 0.2 }}
                  variants={variants.skillSummaryContainer}
                >
                  <motion.span variants={variants.skillSummaryItem}>
                    <HiShieldExclamation />
                    Sujeito a interpretação pessoal
                  </motion.span>
                  <motion.p variants={variants.skillSummaryItem}>
                    {skill.knowledgeSummary}
                  </motion.p>
                </SkillSummary>
              </ListItemComplex>
            ))}
          </List>
        </Achievements>

        <Achievements>
          <h2>Competências.</h2>

          <List>
            {user.skills.tools.map(skill => (
              <ListItemComplex
                key={skill.name}
                knowledgeRate={skill.knowledgeRate}
              >
                <SiJavascript />
                <span>{skill.name}</span>
                <div />
                <ArrowDownIcon
                  onClick={() => handleOpenedSkill(skill.name)}
                  shouldAnimate={openedSkill.includes(skill.name)}
                />
                <SkillSummary
                  animate={
                    openedSkill.includes(skill.name) ? 'visible' : 'hidden'
                  }
                  transition={{ duration: 0.2 }}
                  variants={variants.skillSummaryContainer}
                >
                  <motion.span variants={variants.skillSummaryItem}>
                    <HiShieldExclamation />
                    Sujeito a interpretação pessoal
                  </motion.span>
                  <motion.p variants={variants.skillSummaryItem}>
                    {skill.knowledgeSummary}
                  </motion.p>
                </SkillSummary>
              </ListItemComplex>
            ))}
          </List>
        </Achievements>
      </UserInformation>
    </Container>
  );
};

export default Profile;
