import { Link } from "react-router-dom";
import { images } from "../../constants";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <main>
      <h1 className="main_heading">Dashboard</h1>
      <div className="wrapper">
        <section className="welcome">
          <div className="intro flex_between">
            <div className="intro_name">
              <h2>Welcome</h2>
              <p className="p_custom">Atsky</p>
            </div>
            <img src={images.welcome} alt="welcome" className="hide_mobile" />
          </div>
          <img src={images.avatar} alt="avatar"  className="avatar custom_shadow"/>
          <div className="welcome_body d-flex">
            <div>Zaki Mohsen<span className="d-block">Develpoer</span></div>
            <div>88<span className="d-block">Projects</span></div>
            <div>$8000<span className="d-block">Earned</span></div>
          </div>
          <Link to="/Profile" className="custom_btn">Profile</Link>
        </section>
      </div>
    </main>
  )
}

export default Dashboard