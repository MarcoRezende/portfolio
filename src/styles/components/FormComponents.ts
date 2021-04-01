import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const InputRadioContainer = styled.button`
	background: transparent;
	border: 0;
	color: ${props => props.theme.colors.text.primary};

	display: flex;
	align-items: center;
	justify-content: center;

	input[type='radio'] {
		visibility: hidden;
		width: 0;
	}

	input[type='radio'] + label {
		width: 100%;
		background: transparent;
		border: 2px solid #3b3a42;
		border-radius: 5px;
		font-weight: 600;
		text-align: center;
		cursor: pointer;
		transition-property: border, background;
		transition-duration: 0.5s;

		&:hover {
			background: #6443e4;
			border-color: #6443e4;
		}
	}

	input[type='radio']:checked + label {
		transition: all 0.5s;
		background: #6443e4;
		box-shadow: 0 7px 15px -2px rgb(0 0 0 / 70%);
		border-color: #6443e4;
	}
`;
