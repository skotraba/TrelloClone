import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
//
import Drawer from '@material-ui/core/Drawer';

//components
import NavbarThemeItem from './NavbarThemeItem';

//data
import Styles from '../Styles/StyleData';

import './Navbar.scss';

const useStyles = makeStyles((theme) => ({
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

export default function Navbar() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleMenu = (boolState) => (e) => {
    setOpen(boolState)
  };


  return (
    <div className='myNavBar'>
      <AppBar className='myNavBar' position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Trello Clone
          </Typography>
            <div>
              <Button
                onClick={handleMenu(true)}
                color="inherit"
              >Change Style
              </Button>
              <Drawer 
              anchor={'right'}
              open={open}
              onClose={handleMenu(false)}>
                
                <div className="myNavBar__inner" onClick={handleMenu(false)}>
                  {Styles.map((item, index) => {
                    return (
                      <NavbarThemeItem index={index} image={item.path}/>
                    )
                  })}
                </div>
                

              </Drawer>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
