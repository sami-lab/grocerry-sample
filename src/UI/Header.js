import React, { useState } from 'react';
import {
  useScrollTrigger,
  Grid,
  TextField,
  useMediaQuery,
  useTheme,
  InputAdornment,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Hidden,
  Typography,
  Badge,
  Avatar,
  Paper,
  SwipeableDrawer,
  Switch,
} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
//import StyledMenu from './Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneSharpIcon from '@material-ui/icons/NotificationsNoneSharp';
import LanguageIcon from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';
import RedeemIcon from '@material-ui/icons/Redeem';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

import MenuIcon from '@material-ui/icons/Menu';
import DashboardSharpIcon from '@material-ui/icons/DashboardSharp';
import PermIdentitySharpIcon from '@material-ui/icons/PermIdentitySharp';
import AddSharpIcon from '@material-ui/icons/AddSharp';

const useStyles = makeStyles((theme) => ({
  AppBar: {
    paddingRight: '5em',
    paddingLeft: '5em',
  },
  AppBarContainer: {
    backgroundColor: '#FFFFFF',
    marginBottom: '1em',
    boxShadow: '0px 0px 3px #313C4F59',
    position: 'fixed',
    zIndex: theme.zIndex.modal + 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  logo: {
    height: '6.5em',
    textTransform: 'none',
    [theme.breakpoints.down('md')]: {
      height: '6.5em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '6em',
    },
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    fontFamily: 'SfPro',
    textTransform: 'none',
    fontWeight: 700,
    fontSize: '1rem',
    minWidth: 10,
    color: '#000',
    marginLeft: '20px',
    '&:hover': {
      textDecoration: 'none',
      opacity: 1,
    },
  },

  menu: {
    backgroundColor: theme.palette.common.blue,
    color: 'white',
    borderRadius: '0px',
  },

  menuItem: {
    paddingLeft: '0.8em',
    paddingRight: '0.8em',
    fontFamily: 'Roboto',
    color: 'black',
    textTransform: 'none',
    align: 'center',
    fontWeight: 700,
    fontSize: '1rem',
    '&:hover': {
      textDecoration: 'underline',
      color: 'green',
      opacity: 1,
    },
    '&.Mui-selected': {
      opacity: 1,
    },
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: '1em',
    },
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawerIcon: {
    width: 50,
    height: 50,
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    fontFamily: 'SfPro',
    textTransform: 'none',
    fontWeight: 700,
    fontSize: '1rem',
    minWidth: 10,
    color: '#000',
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
  drawerItemSelected: {
    '& .MuiListItemText-root': {
      opacity: 1,
    },
  },
  input: {
    padding: 0,
    margin: theme.spacing(1),
    '&:focus': {
      borderColor: 'black',
    },
  },
  button: {
    margin: theme.spacing(1),
    width: '90%',
    padding: '0.8em',
  },
  customBadge: {
    backgroundColor: '#008000',
    color: '#fff',
  },
  toolbarMargin: {
    //classname
    ...theme.mixins.toolbar,
    marginBottom: '0.59em', //jss
    [theme.breakpoints.down('md')]: {
      marginBottom: '0.4em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '0.3em',
    },
  },
}));

const ProfileMenu = {
  menuOption: {
    id: 'profile-menu',
  },
  menus: [
    { name: 'Setting', link: '#', icon: <SettingsIcon fontSize="small" /> },
    {
      name: 'My Profile',
      link: '#',
      icon: <PersonIcon fontSize="small" />,
    },
    {
      name: 'Membership',
      link: '#',
      icon: <RedeemIcon fontSize="small" />,
    },
    {
      name: 'Buy Bid Credit',
      link: '#',
      icon: <ShoppingCartIcon fontSize="small" />,
    },
    { name: 'Logout', link: '#', icon: <MeetingRoomIcon fontSize="small" /> },
  ],
};
function Header(props) {
  const classes = useStyles();

  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [language, setLanguage] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [profileAnchor, setProfileAnchor] = useState(null);
  const CustomTextField = withStyles({
    root: {
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderRadius: `50px`,
        },
      },
    },
  })(TextField);
  const AntSwitch = withStyles((theme) => ({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(12px)',
        color: theme.palette.common,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  }))(Switch);
  const tabs = (
    <React.Fragment>
      <Grid container alignItems="center" className={classes.tabContainer}>
        {/* For Left Side search */}
        <Grid item md={7}>
          {' '}
          <Grid
            container
            alignItems="center"
            justify="space-between"
            spacing={1}
          >
            <Grid item>
              <CustomTextField
                variant="outlined"
                size="small"
                className={classes.input}
                style={{
                  width: matchesMD ? '30ch' : '30ch',
                  borderColor: 'black',
                  borderWidth: '1em',
                  borderRadius: '50%',
                }}
                placeholder="Search"
                id="input-with-icon-textfield"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <CustomTextField
                variant="outlined"
                id="standard-select-currency-native"
                size="small"
                className={classes.input}
                style={{ marginLeft: '0.3em', width: '14ch' }}
                select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                SelectProps={{
                  native: true,
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LanguageIcon htmlColor={theme.palette.common.green} />
                    </InputAdornment>
                  ),
                }}
              >
                <option value="EN">EN</option>
                <option value="UR">UR</option>
              </CustomTextField>
            </Grid>

            <Grid item>
              <Typography
                variant="h4"
                style={{
                  textAlign: 'center',
                  margin: 0,
                  padding: 0,
                  fontFamily: 'sans-serif',
                  fontWeight: '700',
                  color: '#000',
                }}
              >
                STORE.
                <span style={{ color: theme.palette.common.green }}>
                  LOCATOR
                </span>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* For Right Side */}
        <Grid
          item
          container
          md={5}
          justify="flex-end"
          style={{ justify: 'flex-end' }}
        >
          {/* Dark  mode Inp */}
          <Typography
            component="div"
            style={{
              alignSelf: 'center',
            }}
          >
            <Grid
              component="label"
              container
              alignItems="center"
              justify="center"
              spacing={1}
              style={{
                border: '2px solid grey',
                borderRadius: 50,
                paddingLeft: '0.3em',
                paddingRight: '0.3em',
              }}
            >
              <Grid
                item
                component={Typography}
                className={classes.input}
                style={{
                  color: 'black',
                  fontFamily: 'sans-serif',
                  marginRight: 0,
                }}
                variant="body2"
              >
                Dark Mode
              </Grid>
              <Grid item>
                <AntSwitch
                  checked={darkMode}
                  onChange={() => setDarkMode((m) => !m)}
                />
              </Grid>
            </Grid>
          </Typography>

          <Typography
            style={{
              marginLeft: '0.5em',
              marginRight: '0.5em',
              alignSelf: 'center',
              fontSize: '32px',
            }}
          >
            {' '}
            |{' '}
          </Typography>

          <IconButton
            aria-label="show 17 new notifications"
            color="inherit"
            style={{ padding: 0 }}
            disableFocusRipple
          >
            <Badge badgeContent={1} classes={{ badge: classes.customBadge }}>
              <NotificationsNoneSharpIcon htmlColor="#91979d" />
            </Badge>
          </IconButton>
          <Typography
            style={{
              marginLeft: '0.5em',
              marginRight: '0.6em',
              alignSelf: 'center',
              fontSize: '32px',
            }}
          >
            {' '}
            |{' '}
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            style={{ backgroundColor: 'transparent' }}
            aria-owns="profile-menu"
            aria-haspopup="true"
            onClick={(e) => setProfileAnchor(e.currentTarget)}
          >
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                {' '}
                <Avatar src="/assets/profile.jpg" />
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="column"
                  justify="flex-end"
                  style={{ color: 'black', margin: 0 }}
                >
                  <Grid item>
                    <Typography
                      variant="subtitle1"
                      style={{
                        margin: 0,
                        padding: 0,
                        color: '#000',
                        fontWeight: '700',
                        fontFamily: 'serif',
                        alignSelf: 'flex-start',
                      }}
                      align="left"
                    >
                      Sami
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    style={{ marginTop: '-0.3em', alignSelf: 'flex-start' }}
                  >
                    <Typography
                      variant="body2"
                      style={{
                        fontFamily: 'sans-serif',
                        opacity: 0.7,
                      }}
                    >
                      Lorem espum
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </IconButton>
          {/* <StyledMenu
            items={ProfileMenu.menus}
            options={ProfileMenu.menuOption}
            anchorEl={profileAnchor}
            handleClose={() => setProfileAnchor(null)}
          /> */}
        </Grid>
      </Grid>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <Grid container justify="flex-end">
        <IconButton
          aria-label="show 17 new notifications"
          color="inherit"
          style={{ marginRight: matchesSM ? 0 : '0.5em' }}
          disableFocusRipple
        >
          <Badge badgeContent={17} classes={{ badge: classes.customBadge }}>
            <NotificationsNoneSharpIcon htmlColor="#91979d" />
          </Badge>
        </IconButton>
        <IconButton
          aria-owns="mobile-menu"
          aria-haspopup={true}
          color="inherit"
          onClick={(e) => props.setOpenDrawer((va) => !va)}
          style={{ marginRight: matchesSM ? 0 : '0.5em' }}
          disableFocusRipple
        >
          <Avatar src="/assets/profile.jpg" />
        </IconButton>
      </Grid>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={props.openDrawer}
        onClose={() => props.setOpenDrawer(false)}
        onOpen={() => props.setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding onClick={() => props.setOpenDrawer(false)}>
          <ListItem
            divider
            button
            component={'a'}
            href="#"
            classes={{ selected: classes.drawerItemSelected }}
          >
            <DashboardSharpIcon style={{ marginRight: '0.3em' }} />

            <ListItemText className={classes.drawerItem} disableTypography>
              DASHBOARD
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            component={'a'}
            href="#"
            classes={{ selected: classes.drawerItemSelected }}
          >
            <PermIdentitySharpIcon style={{ marginRight: '0.3em' }} />

            <ListItemText className={classes.drawerItem} disableTypography>
              Profile
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            component={'a'}
            href="#"
            classes={{ selected: classes.drawerItemSelected }}
          >
            <img
              src="/assets/shopping-bag.svg"
              style={{ width: '1.8em', height: '1.7em', marginRight: '0.3em' }}
            />
            <ListItemText className={classes.drawerItem} disableTypography>
              Orders
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            component={'a'}
            href="#"
            classes={{ selected: classes.drawerItemSelected }}
          >
            <AddSharpIcon style={{ marginRight: '0.3em' }} />
            <ListItemText className={classes.drawerItem} disableTypography>
              Create Order
            </ListItemText>
          </ListItem>
          <Button
            variant="contained"
            style={{
              backgroundColor: theme.palette.common.green,
              color: '#fff',
            }}
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
        </List>
      </SwipeableDrawer>
    </React.Fragment>
  );
  return (
    <>
      {/* Giving Shadow to AppBar */}
      <Grid
        container
        direction="column"
        component={Paper}
        className={classes.AppBarContainer}
      >
        {/* Appbar  */}

        <Grid item container xs={12}>
          <Grid
            container
            justify="space-between"
            alignItems="center"
            className={classes.AppBar}
            style={{ flexWrap: 'nowrap' }}
          >
            {/* Toggle ICon */}
            <Grid item md={1} xs={3} style={{ justifyContent: 'center' }}>
              <Button
                component={'a'}
                href="#"
                disableRipple
                className={classes.logoContainer}
                style={{
                  marginRight: '2em',
                  textDecoration: 'none',
                }}
                onClick={() => props.setOpenDrawer((e) => !e)}
              >
                <MenuIcon fontSize="large" />
              </Button>
            </Grid>
            {/* Menus */}
            <Grid
              item
              md={11}
              xs={9}
              style={{ alignSelf: matchesMD ? undefined : 'flex-end' }}
            >
              <Hidden mdDown>{tabs}</Hidden>
              <Hidden lgUp>{drawer}</Hidden>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.toolbarMargin} />
    </>
  );
}

export default Header;
