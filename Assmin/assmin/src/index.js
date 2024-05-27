import React from 'react';
import ReactDOM from 'react-dom';
import './assets/App.css';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import AdminLayout from './layouts/admin';
import { ChakraProvider } from '@chakra-ui/react';
// import theme from 'theme/theme';
import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui';

ReactDOM.render(
	<ChakraProvider >
		<React.StrictMode>
			<ThemeEditorProvider>
				<HashRouter>
					<Routes>
						{/* <Route path={`/auth`} component={AuthLayout} /> */}
						<Route path={`/admin`} component={AdminLayout} />
						{/* <Route path={`/rtl`} component={RtlLayout} /> */}
						<Navigate from='/' to='/admin' />
					</Routes>
				</HashRouter>
			</ThemeEditorProvider>
		</React.StrictMode>
	</ChakraProvider>,
	document.getElementById('root')
);
