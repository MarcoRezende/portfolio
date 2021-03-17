import styled from 'styled-components';

export const Container = styled.aside`
	padding-bottom: 4rem;
	background: #232227;
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

		svg {
			stroke: #34333a;
		}
	}
`;

export const UserInformation = styled.div`
	padding: 1rem 1rem 0;

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
`;

export const ListItem = styled.li`
	font-size: 1.2rem;
	display: flex;
	align-items: center;

	& + & {
		margin-top: 0.5rem;
	}

	svg {
		margin-right: 0.5rem;
		width: 2rem;
		height: auto;
	}
`;
