import { useState } from "react";
import { FaArrowLeft, FaEdit, FaTrash } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "../../styles/dashboard/Sidebar.module.css";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<number>(-1);

  const listItems: string[] = [
    "School Task",
    "Work Task",
    "Personal Task",
    "Home Task",
  ];

  const handleItemClick = (index: number) => {
    setActiveItem(index);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.menu}>
        <h2>CATEGORIES</h2>
        {/* <AiOutlineMenu className={styles.menu_icon} /> */}
      </div>
      <Link to='/categories/add'>
        <div className={styles.add_btn}>
          <FaArrowLeft className={styles.add_Icon} />
          <button>ADD CATEGORY</button>
        </div>
      </Link>
      <div className={styles.list_logout}>
        <ul className={styles.list}>
          {listItems.map((item, index) => (
            <li
              key={index}
              className={index === activeItem ? styles.active : ""}
              onClick={() => handleItemClick(index)}
            >
              {item}
              {index === activeItem && <div>
                <FaEdit className={styles.actions}/>
                <FaTrash className={styles.trash}/>
              </div>}
            </li>
          ))}
        </ul>

        <div className={styles.logout}>
          <FaArrowLeft className={styles.logout_Icon} /> <button>LOGOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
