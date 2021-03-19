import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.nav`
	background: ${props => props.theme.colors.background.navbar};
	box-shadow: 0 10px 30px 0px rgb(0 0 0 / 50%);
	position: relative;
	z-index: 3;
`;

export const Links = styled.div`
	height: 100%;
	position: absolute;
	transform: translateX(50%);
	right: 50%;
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
