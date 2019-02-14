import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
   
      <a className="Logout" href="/">
        Sign out
      </a>

      <a className="New" href="http://dnd.wizards.com/dungeons-and-dragons/what-is-dd">
        New to the game
      </a>
      <a className="About" href="/About">
        About us
      </a>

      <a className="Contact" href="/Contact">
        Contact the devs
      </a>
      
    </Menu>
  );
};
