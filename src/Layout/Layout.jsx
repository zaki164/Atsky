import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { useState } from "react";
import { Header, Sidebar } from "../components"
import Router from "../Router/Router";
import "./Layout.scss";

const Layout = () => {
  const [small, setsmall] = useState(false);
  const layoutRef = useRef();
  const handleSizeSideBar = () => {
    setsmall(!small)
    layoutRef.current.classList.toggle('smallSize');
  }
  return (
    <>
      <Sidebar small={small} />
      <div className="layout_content position-relative" ref={layoutRef}>
        <span className="iconToggle position-absolute icon_shadow" onClick={handleSizeSideBar}>
          <FontAwesomeIcon icon={faRightLeft} />
        </span>
        <Header />
        <Router />
      </div>
    </>
  )
}

export default Layout