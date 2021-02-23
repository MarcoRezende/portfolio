import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.nav`
	background: ${props => props.theme.colors.background.navbar};
	position: relative;
`;

export const Links = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	bottom: 50%;

	display: flex;
	align-items: center;
	justify-content: center;

	a + a {
		margin-left: 0.8rem;
	}

	a {
		width: 5rem;
		height: 5rem;
		border-radius: 50%;
		background: ${props => props.theme.colors.background.navbar};
		color: #fff;
		box-shadow: 0 2px 20px -5px rgba(0, 0, 0, 0.5);

		display: flex;
		align-items: center;
		justify-content: center;

		transition: background 0.5s;

		&:hover {
			background: ${props =>
				props.theme && darken(0.05, props.theme.colors.background.navbar)};

			transition: background 0.5s;
		}
	}

	svg {
		width: auto;
		height: 2rem;
	}

	a#home-link {
		width: 6rem;
		height: 6rem;

		svg {
			width: auto;
			height: 3rem;
		}
	}
`;
