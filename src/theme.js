import { createMuiTheme } from '@material-ui/core/styles';

const arcGreen = '#7CDBAF';
const arcGrey = '#868686';
// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    common: {
      green: `${arcGreen}`,
    },
    primary: {
      main: '#fff',
    },
    secondary: {
      main: `${arcGreen}`,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
    },
    h1: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.5,
    },
    h2: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: 'Pacifico',
      fontSize: '2.5rem',
    },
    h4: {
      fontFamily: 'Raleway',
      fontSize: '1.75rem',
      fontWeight: 700,
    },
    h6: {
      fontFamily: 'Raleway',
      fontWeight: 500,
      lineHeight: 1,
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: `${arcGrey}`,
    },
    subtitle2: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: 'white',
    },
    body1: {
      fontSize: '1.25em',
      fontWeight: 300,
      color: `${arcGrey}`,
    },
    caption: {
      fontSize: '1em',
      fontWeight: 300,
      color: `${arcGrey}`,
    },
  },
});

export default theme;
