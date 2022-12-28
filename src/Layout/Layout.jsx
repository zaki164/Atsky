import { Header, Sidebar } from "../components"
import Router from "../Router/Router";
import "./Layout.scss";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <div className="layout_content">
        <Header />
        <Router />
      </div>
    </>
  )
}

export default Layout