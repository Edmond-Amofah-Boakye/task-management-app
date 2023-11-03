// import React from "react";
import { AiOutlineMenu } from 'react-icons/ai';
import styles from "../../styles/dashboard/Topbar.module.css";
import profile from '../../assets/default.avif'
import { changeMenuState } from '../../features/general/Togglemenu';
import { useDispatch } from 'react-redux'

const Topbar = () => {
  const dispatch = useDispatch()

  return (
    <div className={styles.wrapper}>
      <div>
        <AiOutlineMenu className={styles.menu_icon} onClick ={()=>dispatch(changeMenuState())}/>
      </div>
      <div className={styles.profile}>
        <img src={profile} alt="profile picture" />
      </div>
    </div>
  );
};

export default Topbar;
