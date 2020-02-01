import React from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
 
}));
export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
             <Link prefetch  href="/"><a href="/" className="nav-link">Home</a></Link>
          </Typography>
          {props && !props.isloggedin ?<Link prefetch  href="/register"><a href="/register" className="nav-link">Register</a></Link>:null}
          {props && !props.isloggedin ?<Link prefetch href="/login"><a href="/login" className="nav-link">Login</a></Link>:null}
        </Toolbar>
      </AppBar>
      <style jsx global>{`
      .nav-link { 
        color: #fff;
      }
      .nav-link:hover{
        color:#000;
      }
      .MuiTypography-h6 {
        flex-grow: 1;
      }
    `}</style>
    </div>
  );
}


