// import React from 'react'
import styles from "../../styles/dashboard/MainContent.module.css";
import Topbar from "./Topbar";
import { FaEdit, FaEye, FaPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";


const MainContent = () => {

  return (
    <div className={styles.wrapper}>
      <Topbar />

      <div className={styles.content}>
        <h1>TASKS</h1>
        <div className="list">
        <table>
          <thead>
            <tr>
                <th style={{backgroundColor: "rgb(44, 44, 170)", color: "white"}}>No.</th>
                <th style={{backgroundColor: "rgb(44, 44, 170)", color: "white"}}>Title</th>
                <th style={{backgroundColor: "rgb(44, 44, 170)", color: "white"}}>View</th>
                <th style={{backgroundColor: "rgb(44, 44, 170)", color: "white"}}>Edit</th>
                <th style={{backgroundColor: "rgb(44, 44, 170)", color: "white"}}>Delete</th>
            </tr>
          </thead>

          <tbody>
            <tr>
                <td>1</td>
                <td>Sample Item 1</td>
                <td><FaEye style={{color: "green", cursor: "pointer"}}/></td>
                <td><FaEdit style={{color: "blue", cursor: "pointer"}}/></td>
                <td><FaTrash style={{color: "red", cursor: "pointer"}}/></td>
            </tr>
            <tr>
                <td>2</td>
                <td>Sample Item 2</td>
                <td><FaEye style={{color: "green", cursor: "pointer"}}/></td>
                <td><FaEdit style={{color: "blue", cursor: "pointer"}}/></td>
                <td><FaTrash style={{color: "red", cursor: "pointer"}}/></td>
            </tr>
            <tr>
                <td>3</td>
                <td>Sample Item 3</td>
                <td><FaEye style={{color: "green", cursor: "pointer"}}/></td>
                <td><FaEdit style={{color: "blue", cursor: "pointer"}}/></td>
                <td><FaTrash style={{color: "red", cursor: "pointer"}}/></td>
            </tr>
          </tbody>
    </table>
        </div>
        <Link to="/task/add">
          <div className={styles.add_btn}>
            <FaPlus className={styles.add_icon} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MainContent;
