import React from 'react';

import { Container } from './styles';
//SVG
import light from '../../assets/light.svg';
import dark from '../../assets/dark.svg';

//THEME 

export default function Header({ handleTheme, theme}) {

	return (
		<Container>
			<h1>Styled Component | Dark&Light Mode</h1>
			<img 
				onClick={handleTheme} 
				src={theme.title === 'light' ? light : dark} 
				alt="Mode Page"
				/>
		</Container>
	)
}