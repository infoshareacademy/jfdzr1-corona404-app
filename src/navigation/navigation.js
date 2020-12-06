import React from "react";
import clsx from "clsx";
import "./navigation.css";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import firebase from 'firebase';
import {useEffect, useState} from 'react';
import Button from '@material-ui/core/button';
import QueueIcon from '@material-ui/icons/Queue';
import LanguageIcon from '@material-ui/icons/Language';



const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


export default function Navigation() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
  firebase.auth().onAuthStateChanged(user => {
        setUser(user)
      });
  }, []);
  

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const signOut = () => {
    firebase.auth().signOut();
}

const signIn = () => {
  firebase.auth().signInWithEmailAndPassword();
}

  
  return (
    <div className={classes.root} style={{ paddingTop: 56 }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{
          background:
            "linear-gradient(162deg, rgba(69,123,157), rgba(168,218,220))",
          color: "white",
          opacity: "1",
        }}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar style={{display: 'flex'}}
        >
          <IconButton
            style={{ color: "green" }}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
          <Typography variant="h6" noWrap>
            Sklep 404 - Tylko Polska jakość!
          </Typography>
 <div style={{marginLeft:'auto'}}>{user ? <Button onClick={signOut} style={{color: 'white', border:'1px white solid'}}>Wyloguj</Button> : <Link to="/sign-in" style={{textDecoration: 'none'}}><Button style={{color: 'white', border:'1px white solid'}}>Zaloguj</Button></Link>}</div>
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
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link
            to="/"
            style={{ textDecoration: "none", display: "flex", color: "black" }}
          >
            <ListItem button style={{ height: "80px" }}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Strona Główna</ListItemText>
            </ListItem>
          </Link>

          <Link
            to="/products"
            style={{ textDecoration: "none", display: "flex", color: "black" }}
          >
            <ListItem button style={{ height: "80px" }}>
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText>Produkty</ListItemText>
            </ListItem>
          </Link>

          <Link
            to="/cart"
            style={{ textDecoration: "none", display: "flex", color: "black" }}
          >
            <ListItem button style={{ height: "80px" }}>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText>Koszyk</ListItemText>
            </ListItem>
          </Link>

          <Link
            to="/form"
            style={{ textDecoration: "none", display: "flex", color: "black" }}
          >
            <ListItem button style={{ height: "80px" }}>
              <ListItemIcon><QueueIcon/></ListItemIcon>
              <ListItemText>Dodaj produkt</ListItemText>
            </ListItem>
          </Link>

          <Link to="/profile" style={{ textDecoration: 'none', display: 'flex', color: 'black' }}>
            <ListItem button style={{ height: "80px" }}>
              <ListItemIcon><ContactMailIcon /></ListItemIcon>
              <ListItemText>Profil</ListItemText>
            </ListItem>
          </Link>
          <hr></hr>
          <Link to={{ pathname: "http://www.corona404.jfdzr1.is-academy.pl/" }} target="_blank" style={{ textDecoration: 'none', display: 'flex', color: 'black'}} >
          <ListItem button style={{ height: "80px" }}>
              <ListItemIcon><LanguageIcon /></ListItemIcon>
              <ListItemText>Corona404</ListItemText>
            </ListItem>
          </Link>
        </List>
      </Drawer>

      {/* <main className={classes.content} style={{margin:'0', padding:'0'}}>
        <div className={classes.toolbar} />
        <Typography paragraph >
        
          <Switch>
            <Route exact path="/">
              <Dashboard/>
             </Route>
             <Route path="/products">
              <Cards/>
             </Route>
             <Route path="/cart">
              <Cart/>
             </Route>
             <Route path="/form">
              <Form/>
             </Route>
           </Switch>
        </Typography>
      </main> */}
    </div>
  );
}
