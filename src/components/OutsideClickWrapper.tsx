import { useEffect, useRef } from 'react';

export interface WrapperProps {
	className?: string;

	as?: string;

	onClickInside?(): any | void;
	onClickOutside?(): any | void;
}

const OutsideClickWrapper: React.FC<WrapperProps> = ({
	className,
	children,
	as: tagName,
	onClickInside,
	onClickOutside,
}) => {
	// const Wrapper = tagName as keyof JSX.IntrinsicElements;
	const wrapperRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		document.addEventListener('click', handleClick);

		return () => {
			document.removeEventListener('click', handleClick);
		};
	}, []);

	const handleClick = (e: MouseEvent) => {
		return wrapperRef.current.contains(e.target as Node)
			? onClickInside()
			: onClickOutside();
	};

	return (
		<div ref={wrapperRef} className={className}>
			{children}
		</div>
	);
};

OutsideClickWrapper.defaultProps = {
	className: '',

	as: 'div',

	onClickInside: () => {
		return;
	},
	onClickOutside: () => {
		return;
	},
};

export default OutsideClickWrapper;
