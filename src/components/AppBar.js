import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as blockstack from 'blockstack';
import { withStyles } from '@material-ui/core/styles';
import MaterialAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import SaveIcon from '@material-ui/icons/Save';
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = {
  root: {
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  rightPad: {
    marginRight: 10,
  },
};

class AppBar extends Component {
  state = {
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  closeMenu = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout = () => {
    this.props.logOut();
    this.closeMenu()
  };

  renderLogin() {
    return (
      <Button color="inherit" onClick={() => this.props.logIn()}>Sign In With Blockstack</Button>
    )
  }
  renderLogout() {
    return (
      <input type="button" onClick={() => this.props.logOut()} value="Log Out" />
    );
  }
  renderUserMenu() {
    const {
      profile,
      classes,
      edited,
      saving,
    } = this.props;
    const user = new blockstack.Person(profile);
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <Button
          color="inherit"
          disabled={(saving || !edited)}
          onClick={() => this.props.saveSnippet()}
          className={classes.rightPad}
        >
          {saving ? <CircularProgress className={classes.rightPad} color="inherit" size={20} /> : <SaveIcon className={classes.rightPad}/>}
          {saving ? 'Saving' : 'Save' } Snippet
        </Button>
        <IconButton
          aria-owns={open ? 'menu-appbar' : undefined}
          aria-haspopup="true"
          onClick={this.handleMenu}
          color="inherit"
        >
          {!!user.avatarUrl() ?  <Avatar alt="?" src={user.avatarUrl()} className={classes.avatar} /> : <AccountCircle />}
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={this.closeMenu}
        >
          <MenuItem onClick={this.handleClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleLogout}>Log Out</MenuItem>
        </Menu>
      </div>
    );
  }

  render() {
    const {
      classes,
      loggedIn,
    } = this.props;

    return (
      <div className={classes.root}>
        <MaterialAppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Decentralized Snippets
            </Typography>
            {loggedIn ? this.renderUserMenu() : this.renderLogin()}
          </Toolbar>
        </MaterialAppBar>
      </div>
    );
  }
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBar);
