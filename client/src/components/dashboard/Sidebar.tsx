import { useState } from "react";
import { FaArrowLeft, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "../../styles/dashboard/Sidebar.module.css";
import { useGetCategoriesQuery, useGetCategoryQuery, useDeleteCategoryMutation } from "../../features/api/CategoryAPI";
import Spinner from "../spinner/Spinner";

const Sidebar = () => {

  // const [ getCategory ] = useGetCategoryQuery(null)

  const [ deleteCategory] = useDeleteCategoryMutation()
  const [activeItem, setActiveItem] = useState<number>(-1);
  const { data: category, isLoading, isError, isFetching} = useGetCategoriesQuery(null)

 
  if(isLoading || isFetching){
    return <Spinner />
  }
  
  if(isError){
    return <p>Something went wrong</p>
  }

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
          {category.data.map((item, index: number) => (
            <li
              key={item._id}
              className={index === activeItem ? styles.active : ""}
              onClick={() => handleItemClick(index)}
            >
              <div>{item.name}</div>
              {index === activeItem && <div>
                <FaEdit className={styles.actions}/>
                <FaTrash className={styles.trash} onClick={()=>deleteCategory(item._id)}/>
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
