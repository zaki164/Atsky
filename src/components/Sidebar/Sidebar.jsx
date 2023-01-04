import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";
import { data } from "../../constants";

const Sidebar = ({small}) => {
  return (
    <aside className={`sidebar position-fixed custom_shadow ${small ? 'smallSize' : ''}`}>
      <h4 className="title text-center position-relative fw-bold">{document.title}</h4>
      <ul className="flex-column">
      {
        data.nav.map((ele, i) => 
        (
          <li key={i}>
            <NavLink exact="true" to={`/${ele.name === "Dashboard" ? "" : ele.name}`}>
              <FontAwesomeIcon icon={ele.icon} className={ele.color} fixedWidth />
              <span>{ele.name}</span>
            </NavLink>
          </li>
        ))
      }
      </ul>
    </aside>
  )
}

export default Sidebar