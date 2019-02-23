import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';

import GlobalStyles from '../../styles/GlobalStyles';
import GlobalFonts from '../../styles/GlobalFonts';
import Navigator from '../Navigator';
import UIProvider from '../../context/UIProvider';

import theme from '../../styles/theme';

const Layout = props => {
  const { children } = props;

  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <GlobalStyles />
        <GlobalFonts />
        <Navigator />
        {children}
      </UIProvider>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
