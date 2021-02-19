import React from 'react';
import {
  Button,
  ListItemIcon,
  useTheme,
  Grid,
  Typography,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import DashboardSharpIcon from '@material-ui/icons/DashboardSharp';
import PermIdentitySharpIcon from '@material-ui/icons/PermIdentitySharp';
import AddSharpIcon from '@material-ui/icons/AddSharp';

const useStyles = makeStyles((theme) => ({
  drawerItem: {
    textTransform: 'none',
    fontWeight: 700,
    fontSize: '1.3rem',
    minWidth: 10,
    color: '#000',
  },
  button: {
    margin: theme.spacing(2),
    padding: '0.8em',
  },
}));
const SideBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid
      container
      direction="column"
      disablePadding
      style={{ alignSelf: 'flex-start' }}
    >
      <Grid
        item
        container
        alignItems="center"
        component={'a'}
        href="#"
        style={{
          textDecoration: 'none',
          paddingLeft: '1.5em',
          paddingTop: '1em',
          paddingBottom: '1em',
          backgroundColor: theme.palette.common.green,
          borderTopRightRadius: 20,
        }}
      >
        <ListItemIcon>
          <DashboardSharpIcon
            fontSize="large"
            htmlColor={theme.palette.common.white}
          />
        </ListItemIcon>
        <Typography
          variant="h5"
          style={{ color: theme.palette.common.white }}
          className={classes.drawerItem}
        >
          DASHBOARD
        </Typography>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        component={'a'}
        href="#"
        style={{
          // borderStyle="ridge"
          borderBottom: '0.1px ridge #EBEBEB',
          textDecoration: 'none',
          paddingLeft: '1.5em',
          paddingTop: '1em',
          paddingBottom: '1em',
        }}
      >
        <ListItemIcon>
          <PermIdentitySharpIcon fontSize="large" />
        </ListItemIcon>
        <Typography
          variant="h5"
          style={{ opacity: 0.7 }}
          className={classes.drawerItem}
        >
          Profile
        </Typography>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        component={'a'}
        href="#"
        style={{
          // borderStyle="ridge"
          borderBottom: '0.1px ridge #EBEBEB',
          textDecoration: 'none',
          paddingLeft: '1.5em',
          paddingTop: '1em',
          paddingBottom: '1em',
        }}
      >
        <ListItemIcon>
          <img
            src="/assets/shopping-bag.svg"
            style={{ width: '2em', height: '2em' }}
          />
        </ListItemIcon>
        <Typography
          variant="h5"
          style={{ opacity: 0.7 }}
          className={classes.drawerItem}
        >
          Orders
        </Typography>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        component={'a'}
        href="#"
        style={{
          // borderStyle="ridge"
          borderBottom: '0.1px ridge #EBEBEB',
          textDecoration: 'none',
          paddingLeft: '1.5em',
          paddingTop: '1em',
          paddingBottom: '1em',
        }}
      >
        <ListItemIcon>
          <AddSharpIcon fontSize="large" />
        </ListItemIcon>
        <Typography
          variant="h5"
          style={{ opacity: 0.7 }}
          className={classes.drawerItem}
        >
          Create Order
        </Typography>
      </Grid>
      <Button
        variant="contained"
        style={{ backgroundColor: theme.palette.common.green, color: '#fff' }}
        className={classes.button}
        startIcon={
          <img
            src="/assets/logout.svg"
            style={{ color: '#fff' }}
            width="20"
            height="20"
          />
        }
      >
        Logout
      </Button>
    </Grid>
  );
};

export default SideBar;
