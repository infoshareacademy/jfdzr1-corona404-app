import React from 'react';
import clsx from 'clsx';
import './navigation.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Dashboard from '../dashboard/dashboard';
import {Route, Switch, Link, } from "react-router-dom";
import Cart from '../cart/cart';
import Cards from '../products/productCards/Cards';



const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  root: {
    width:'100%'
    

  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{ background: '#457b9d'}}
        position="fixed"
        color="secondary"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography 
          variant="h6" 
          noWrap>
  
            Tylko Polska jakość!
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
      
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button >
            <Link to="/dashboard" style={{textDecoration: 'none', display:'flex', color:'black'}}>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText>Dashboard</ListItemText>
              </Link>
            </ListItem>
            
            <ListItem button>
            <Link to="/products" style={{textDecoration: 'none', display:'flex', color:'black'}}>
              <ListItemIcon><SearchIcon /></ListItemIcon>
              <ListItemText>Products</ListItemText>
              </Link>
            </ListItem>

            <ListItem button>
            <Link to="/cart" style={{textDecoration: 'none', display:'flex', color:'black'}}>
              <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
              <ListItemText>Cart</ListItemText>
              </Link>
            </ListItem>

            <ListItem button>
            <Link to="/cart" style={{textDecoration: 'none', display:'flex', color:'black'}}>
              <ListItemIcon><ContactMailIcon /></ListItemIcon>
              <ListItemText>Form</ListItemText>
              </Link>
            </ListItem>
            

        </List>
        
      </Drawer>
      <main className={classes.content} style={{margin:'0', padding:'0'}}>
        <div className={classes.toolbar} />
        <Typography paragraph >
        
          <Switch>
            <Route exact path="/">
              <Dashboard/>
             </Route>
             
             <Route path="/dashboard">
             <Dashboard/>
             </Route>

             <Route path="/products">
              <Cards/>
             </Route>
             <Route path="/cart">
              <Cart/>
             </Route>
             <Route path="/form">
              
             </Route>
           </Switch>
        </Typography>
      </main>
    </div>
  );
}
