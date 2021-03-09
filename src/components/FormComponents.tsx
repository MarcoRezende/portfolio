import React, {
	InputHTMLAttributes,
	useEffect,
	useRef,
	useCallback,
	useState,
	memo
} from 'react';
import { useField } from '@unform/core';

import { InputRadioContainer } from '../styles/components/FormComponents';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
}

interface InputRadioProps extends InputHTMLAttributes<HTMLInputElement> {
	isFilterOpened?: boolean;
	name: string;
	btnType?: string;
	options: {
		id: string;
		value: string;
		label: string;
	}[];
}

export const Input: React.FC<InputProps> = ({ name, ...rest }) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const { fieldName, registerField } = useField(name);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRef.current,
			path: 'value',
		});
	}, [fieldName, registerField]);

	return (
		<input name={name} {...rest} ref={inputRef}/>
	);
};

const InputRadio: React.FC<InputRadioProps> = ({
	isFilterOpened,
	name,
	btnType = 'button',
	options,
	...rest
}) => {
	const [inputsRefs, setInputsRefs] = useState<HTMLInputElement[]>([]);
	let inputRefs = useRef<HTMLInputElement[]>([]);
	const { fieldName, registerField, defaultValue = '' } = useField(name);

	const setRefs = useCallback((ref) => {
		if (ref !== null) {
			const foundIndexRef = inputsRefs.length ? inputsRefs.findIndex(item => item.id === ref.id) : -1;

			if (!(foundIndexRef + 1)) {
				const newRefs = inputsRefs;
				newRefs.push(ref)

				setInputsRefs(newRefs);
				inputRefs.current = inputsRefs;
			}
		}
	}, [inputsRefs])

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRefs.current,
			getValue: (refs: HTMLInputElement[]) => {
				return refs.find(ref => ref.checked)?.value || '';
			},
			setValue: (refs: HTMLInputElement[], id: string) => {
				const inputRef = refs.find(ref => ref.id === id);
				if (inputRef) inputRef.checked = true;
			},
			clearValue: (refs: HTMLInputElement[]) => {
				const inputRef = refs.find(ref => ref.checked === true);
				if (inputRef) inputRef.checked = false;
			},
		});
	}, [defaultValue, fieldName, registerField]);

	return (
		<>
			{options.map(option => (
				<InputRadioContainer type={btnType} key={option.id} >
					<input
						ref={ref => setRefs(ref)}
						id={option.id}
						type="radio"
						name={name}
						defaultChecked={defaultValue.includes(option.id)}
						value={option.value}
						{...rest}
					/>
					<label htmlFor={option.id} key={option.id}>{option.label}</label>
				</InputRadioContainer>
			))}
		</>
	);
};

export default memo(InputRadio);