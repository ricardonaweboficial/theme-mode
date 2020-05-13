import styled from 'styled-components';

export const Container = styled.div`
	width:100%;
	height:60px;
	background:${props => props.theme.colors.primary};	

	display:flex;
	justify-content:space-around;
	align-items:center;

	h1 {
		font-size:20px;
		color:${props => props.theme.colors.color};
	}

	img {
		width:25px;
		cursor:pointer;
	}
`;