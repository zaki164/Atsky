import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";
import { data } from "../../constants";

const Sidebar = () => {
  return (
    <aside className="sidebar position-fixed custom_shadow">
      <h4 className="title text-center position-relative fw-bold">{document.title}</h4>
      <ul className="flex-column">
      {
        data.nav.map((ele, index) => 
        (
          <li key={index}>
            <NavLink exact="true" to={`/${ele.name === "Dashboard" ? "" : ele.name}`}>
              <FontAwesomeIcon icon={ele.icon} fixedWidth />
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