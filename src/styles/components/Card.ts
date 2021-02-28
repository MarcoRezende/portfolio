import styled, { css } from 'styled-components';
import { darken } from 'polished';

import { CardProps } from '../../components/Card';

interface CardContainerProps extends CardProps {
	reflection: any[];
}

export const Container = styled.div<CardProps>`
	position: relative;
	border-radius: ${props => props.styles.borderRadius};
	min-height: 100px;

	display: flex;
	justify-content: center;

	${props => {
		let margin = props.reflections.length;

		return css`
			margin-top: ${props =>
				props.styles.margin + margin + props.features.distanceRate}rem;
		`;
	}}

	${props =>
		props.reflections.map((_, i) => {
			return css`
				& > .reflection:nth-child(${i + 1}) {
					width: ${100 - (i + 1) * 10}%;
					bottom: ${i + 1 + props.features.distanceRate}rem;
					z-index: ${-i - 1};
					background: ${props =>
						props.styles &&
						darken(
							(i + 1) * (props.features.darkenRate / 10),
							props.styles.reflectColor
								? props.styles.reflectColor
								: props.styles.cardColor,
						)};
					${i + 1 !== props.reflections.length &&
					css`
						box-shadow: 0 -9px 5px -10px rgb(0 0 0 / 60%);
					`}
				}
			`;
		})}

	& > .reflection {
		border-radius: ${props => props.styles.borderRadius};
	}
`;

export const Reflection = styled.div`
	height: 100%;
	position: absolute;
`;

export const Content = styled.div<CardProps>`
	background: ${props => props.styles.cardColor};
	box-shadow: 0 -10px 10px -10px rgb(0 0 0 / 78%);

	${props =>
		props.features.applyBorderRadiusAll &&
		css`
			overflow: hidden;
			border-radius: ${props => props.styles.borderRadius};
		`};
`;
