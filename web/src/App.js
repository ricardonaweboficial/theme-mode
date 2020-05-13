import React, { useState } from 'react';

import GlobalStyle from  './pages/global';
import { ThemeProvider } from 'styled-components';

import light from './themes/light';
import dark from './themes/dark';

import Header from './pages/Header';
import Section from './pages/Section';

function App() {
	const [ theme, setTheme ] = useState(light);

	function handleTheme() {
		setTheme(theme.title === 'light' ? dark : light);
	}

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Header handleTheme={handleTheme} theme={theme}/>
			<Section />
		</ThemeProvider>
	);
}

export default App;
