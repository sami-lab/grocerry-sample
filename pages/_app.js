import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Grid, useMediaQuery, useTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppBar from '../src/UI/Header';
import Card from '../src/UI/Card';
import SideBar from '../src/UI/sideBar';
import thme from '../src/theme';
export default function MyApp(props) {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('down'));
  const [openDrawer, setOpenDrawer] = useState(false);

  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  React.useEffect(() => {
    if (matchesSM) setOpenDrawer(false);
    else setOpenDrawer(true);
  }, [matchesSM]);
  return (
    <React.Fragment>
      <Head>
        <title>Grocery App</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={thme}>
        <AppBar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />

        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Grid container>
          {!matchesSM && openDrawer && (
            <Grid item md={2}>
              <Card
                style={{
                  borderTopRightRadius: 20,
                  minHeight: '100%',
                  padding: 0,
                }}
              >
                <SideBar />
              </Card>
            </Grid>
          )}
          <Grid item md={openDrawer ? 10 : 12}>
            <Component {...pageProps} />
          </Grid>
        </Grid>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
