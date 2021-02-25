import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
	position: relative;
	border-radius: ${props => props.styles.borderRadius};
	min-height: 100px;

	display: flex;
	justify-content: center;

	${props => {
		let margin = props.reflections.length;

		return css`
			margin-top: ${props =>
				props.styles.margin + margin + props.distanceRate}rem;
		`;
	}}

	${props =>
		props.reflections.map((_, i) => {
			return css`
				& > .reflection:nth-child(${i + 1}) {
					width: ${100 - (i + 1) * 10}%;
					bottom: ${i + 1 + props.distanceRate}rem;
					z-index: ${-i - 1};
					background: ${props =>
						props.styles && darken((i + 1) * 0.01, props.styles.color)};
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

export const Content = styled.div`
	background: ${props => props.styles.color};

	${props =>
		props.applyBorderRadiusAll &&
		css`
			overflow: hidden;
			border-radius: ${props => props.styles.borderRadius};
		`};
`;
