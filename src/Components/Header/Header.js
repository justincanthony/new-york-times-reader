import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { AppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { withTheme } from '@emotion/react';

export const Header = ({ isHome }) => {
  const headerColor = {
    backgroundColor: 'black',
    color: 'white',
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={headerColor}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className="title" to="/">
              New York Times Top Stories
            </Link>
          </Typography>
          {isHome && (
            <Button
              variant="inherit"
              onClick={() => window.location.reload(false)}
            >
              Refresh Stories
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
