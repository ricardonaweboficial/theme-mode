import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: none;
		box-sizing:border-box;
	}

	body {
		background:${props => props.theme.colors.background};
		--webkit-font-smoothing:antialiased;
		font:500 14px sans-serif;
	}

	button { 
		cursor:pointer;
	}
`;

