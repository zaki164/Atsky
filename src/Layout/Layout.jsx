import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLayoutEffect, useState } from "react";
import { Header, Sidebar } from "../components"
import Router from "../Router/Router";
import "./Layout.scss";

const Layout = () => {
  const [small, setsmall] = useState(false);
  const sidebarsmall = localStorage.getItem('sidebarSmall')
  const handleSizeSideBar = () => {
    setsmall(!small)
    localStorage.setItem('sidebarSmall', !small)
  }
  useLayoutEffect(() => {
    if (sidebarsmall) {
      if (sidebarsmall === "true") {
        setsmall(true);
      }
    }
  }, [sidebarsmall])
  return (
    <>
      <Sidebar small={small} />
      <div className={`layout_content position-relative ${small ? 'smallSize' : ''}`}>
        <span className="iconToggle position-fixed icon_shadow" onClick={handleSizeSideBar}>
          <FontAwesomeIcon icon={faRightLeft} />
        </span>
        <Header />
        <Router />
      </div>
    </>
  )
}

export default Layout