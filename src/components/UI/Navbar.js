
import React from 'react';
import classes from './Navbar.module.css';

const Navbar = (props) => {
  return (
    <nav className={classes["navbar"]}>
      <div className={classes["navbar-brand"]}>
        <img src={process.env.PUBLIC_URL + "/images/logo.svg"} alt='logo' className={classes['logo']}/>
        <h1 className={classes["navbar-title"]}>my travel journal</h1>
      </div>
    </nav>
  )
}

export default Navbar;
