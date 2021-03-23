import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { motion } from 'framer-motion';
import SimpleBar from 'simplebar-react';

import { IoIosArrowDown } from 'react-icons/io';

interface ListItemComplexProps {
	knowlegdeRate: number;
}

interface ArrowDownIconProps {
	shouldAnimate: boolean;
}

export const Container = styled.aside`
	background: #232227;
	overflow: hidden;
	display: grid;
	grid-template-rows: auto 1fr;
`;

export const Header = styled.header`
	background: #34333a;
`;

export const Background = styled.div`
	position: relative;
	background: url(https://static-cse.canva.com/blob/142372/Patterns-3-03.jpg);
	background-size: cover;
	background-position: center;
	width: 100%;
	height: 10rem;
`;

export const Avatar = styled.div`
	position: absolute;
	background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7xhpvgcH7bfPaLFnOtotC5UD5Yj0NYVjtPzO71Dyptrxjbg7xAKvK8G28nMeMlymAuLE&usqp=CAU);
	background-position: center;
	background-size: cover;
	transform: translate(50%, 50%);
	right: 50%;
	top: 25%;
	height: 7rem;
	width: 7rem;
	border-radius: 50%;
`;

export const UserDetails = styled.div`
	padding: 4rem 1rem 2rem;
	text-align: center;

	display: flex;
	align-items: center;
	flex-direction: column;

	h2 {
		font-weight: 800;
		font-size: 1.4rem;
		margin: 0.3rem 0;
	}

	span {
		font-weight: 700;
		font-size: 1.2rem;
	}
`;

export const Socials = styled.div`
	display: flex;
	margin-top: 0.5rem;

	a + a {
		margin-left: 0.5rem;
	}

	a {
		border-radius: 50%;
		background: #dedede;
		color: #34333a;
		height: 3rem;
		width: 3rem;
		display: flex;
		align-items: center;
		justify-content: center;
		transform: scale(1);
		transition: 0.2s transform ease;

		&:hover {
			transform: scale(1.1);
			box-shadow: 0 3px 15px -1px rgb(0 0 0 / 90%);
			transition: 0.5s all ease;
		}

		svg {
			stroke: #34333a;
		}
	}
`;

export const UserInformation = styled(SimpleBar)`
	padding: 2rem;
	overflow: hidden auto;
	height: 100%;

	p {
		border-left: 5px solid;
		padding: 1rem;
		font-size: 1.2rem;
	}
`;
export const Achievements = styled.div`
	h2 {
		font-size: 1.6rem;
	}
`;

export const List = styled.ul`
	margin: 1rem 0;

	li {
		font-size: 1.2rem;

		display: grid;
		align-items: center;

		> svg {
			width: 2rem;
			height: auto;
		}
	}

	li + li {
		margin-top: 0.5rem;
	}
`;

export const ListItem = styled.li`
	grid-template-columns: auto 1fr;
	grid-column-gap: 0.5rem;
`;

export const ListItemComplex = styled.li<ListItemComplexProps>`
	grid-template-columns: auto 1fr 5rem auto;
	grid-template-rows: repeat(2, auto);
	grid-column-gap: 0.5rem;
	grid-template-areas:
		'skill-icon skill-name skill-rate arrow'
		'skill-summary skill-summary skill-summary skill-summary';

	> svg:nth-of-type(1) {
		grid-area: skill-icon;
	}

	> span {
		grid-area: skill-name;
	}

	> div:nth-of-type(1) {
		grid-area: skill-rate;

		width: 100%;
		height: 0.5em;
		background: #45454a;
		border-radius: 10px;
		position: relative;
		overflow: hidden;

		&:after {
			content: '';
			height: 100%;
			display: block;
			position: absolute;

			${props =>
				css`
					width: ${props.knowlegdeRate}%;
					background: ${darken(props.knowlegdeRate / 1000, '#522de1')};
				`}
		}
	}

	> svg:nth-of-type(2) {
		grid-area: arrow;

		grid-area: arrow;
		cursor: pointer;
		margin-left: 1rem;
	}

	> div:nth-of-type(2) {
		grid-area: skill-summary;
	}
`;

export const SkillSummary = styled(motion.div)`
	text-align: justify;

	span {
		margin: 1rem 0;
		border-top: 3px solid #46b358;
		background: #34333a;
		box-shadow: 0 3px 10px -4px rgb(0 0 0 / 45%);
		width: 100%;
		padding: 0.5rem;

		display: flex;
		align-items: center;

		svg {
			stroke: #46b358;
			height: 2rem;
			width: auto;
			margin-right: 0.5rem;
		}
	}

	p {
		margin-bottom: 1rem;
	}
`;

export const ArrowDownIcon = styled(IoIosArrowDown)<ArrowDownIconProps>`
	transform: rotate(0);
	transition: transform 0.5s ease;

	${props =>
		props.shouldAnimate &&
		css`
			transform: rotate(180deg);
			transition: transform 0.5s ease;
		`}
`;
