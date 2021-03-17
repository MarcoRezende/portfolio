import { FiGithub, FiDribbble } from 'react-icons/fi';
import { RiLinkedinLine } from 'react-icons/ri';
import { SiMailDotRu, SiJavascript } from 'react-icons/si';
import { IoLanguageSharp } from 'react-icons/io5';

SiMailDotRu;

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
} from '../styles/components/Profile';

const Profile: React.FC = () => {
	const user = {
		name: 'Marco Rezende dos Santos',
		role: 'Desenvolvedor Web',
		email: 'marco@email.com',
		skills: {
			programmingLanguages: [
				{
					name: 'Javascript',
					knowlegdeRate: 70,
					knowlegdeSummary:
						'Domínio dos fundamentos da linguagem: variáveis, funções, loops, promises.',
				},
				{
					name: 'HTML',
					knowlegdeRate: 90,
					knowlegdeSummary:
						'Correta aplicação das diversas tags html, de forma semântica e respeitando a acessibilidade.',
				},
			],
			tools: [
				{
					name: 'Typescript',
					knowlegdeRate: 75,
					knowlegdeSummary:
						'Uso contínuo em aplicações desenvolvidas com javascript.',
				},
			],
		},
		availability: true,
	};

	return (
		<Container>
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
							<ListItem key={skill.name}>
								<SiJavascript />
								{skill.name}
							</ListItem>
						))}
					</List>
				</Achievements>

				<Achievements>
					<h2>Competências.</h2>

					<List>
						{user.skills.tools.map(skill => (
							<ListItem key={skill.name}>
								<SiJavascript />
								{skill.name}
							</ListItem>
						))}
					</List>
				</Achievements>
			</UserInformation>
		</Container>
	);
};

export default Profile;
