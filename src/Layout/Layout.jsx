import { Header, Sidebar } from "../components"
import Router from "../Router/Router";
import "./Layout.scss";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <div className="content">
        <Header />
        <Router />
      </div>
    </>
  )
}

export default Layout