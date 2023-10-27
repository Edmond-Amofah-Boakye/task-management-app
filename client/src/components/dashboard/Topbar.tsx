// import React from "react";
import { AiOutlineMenu } from 'react-icons/ai';
import styles from "../../styles/dashboard/Topbar.module.css";
import profile from '../../assets/default.avif'

interface HandleMenuProp {
  handleMenu: () => void
}

const Topbar = ({handleMenu}: HandleMenuProp) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <AiOutlineMenu className={styles.menu_icon} onClick ={handleMenu}/>
      </div>
      <div className={styles.profile}>
        <img src={profile} alt="profile picture" />
      </div>
    </div>
  );
};

export default Topbar;
