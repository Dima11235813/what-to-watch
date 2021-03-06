import React, { Component } from "react";
// import classNames from "classnames";
import styles from "./DesktopHeader.module.scss";

import { inject, observer } from "mobx-react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import { PrimaryButton } from "../../../components/shared/PrimaryButton/PrimaryButton";
import { buttonProps } from "../../cssInJs/buttonProps";
import { logToConsole } from "../../../utils/logger";

// interface Props {
//   authStore?: AuthStore;
// }

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

// class DesktopHeader extends Component<Props> {
const DesktopHeader = () => {
  logToConsole(`Desktop Header render`);
  const classes = useStyles();
  return (
    <div className={styles.appBarContainer}>
      <div className={classes.root}>
        <AppBar>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.title}>
              <NavLink
                to="/netflixCategories"
                activeClassName={styles.activeLink}
              >
                <Typography gutterBottom={true} variant="h6">
                  <span className={styles.linkText}>
                    Define Netflix Categories
                  </span>
                </Typography>
              </NavLink>
            </div>
            <div className={classes.title}>
              <NavLink to="/actorImage" activeClassName={styles.activeLink}>
                <Typography gutterBottom={true} variant="h6">
                  <span className={styles.linkText}>Actor Related Image</span>
                </Typography>
              </NavLink>
            </div>
            <PrimaryButton {...buttonProps} color="inherit">
              Login
            </PrimaryButton>
          </Toolbar>
        </AppBar>
        {/* <div><Logo className={styles.Logo} /></div>
        <div>
          <div className={styles.Search}></div>

          <a className={styles.LogOut}>Log Out</a>
        </div> */}
      </div>
    </div>
  );
};
export default DesktopHeader;
