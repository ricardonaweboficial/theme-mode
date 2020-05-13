import styled from 'styled-components';

export const Container = styled.div`
	width:100%;
	display:flex;
	justify-content:center;
	margin-top:200px;

	h1 {
		font-size:70px;
		color:${props => props.theme.colors.color}
	}

`;