import React, { Component } from "react";
// import { Menu, MenuItem } from "material-ui";
// import { PrimaryButton } from "../../components/shared/PrimaryButton/PrimaryButton";
// import { logToConsole } from "../../utils/logger";
import { Desktop, Mobile } from '../../App';
import DesktopHeader from './Desktop/DesktopHeader';
import MobileHeader from './Mobile/MobileHeader';

export class Header extends Component {
  render() {
    return (
      <>
        <Desktop>
          <DesktopHeader/>
        </Desktop>
        <Mobile>
          <MobileHeader/>
        </Mobile>
      </>
    );
  }
}    
//   let anchorEl: HTMLAnchorElement;
//   const handleClick = () => {};
//   const handleClose = () => {};
//   return (
//     <header ref={anchorEl}>
//       <PrimaryButton
//         aria-controls="simple-menu"
//         aria-haspopup="true"
//         onClick={handleClick}
//       >
//         Open Menu
//       </PrimaryButton>
//       <Menu
//         id="simple-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//       >
//         <MenuItem onClick={handleClose}>Profile</MenuItem>
//         <MenuItem onClick={handleClose}>My account</MenuItem>
//         <MenuItem onClick={handleClose}>Logout</MenuItem>
//       </Menu>
//     </header>
//   );

