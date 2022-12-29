import { ProfileInfo } from "../../components";
import "./Profile.scss";

const Profile = () => {
  return (
    <main>
      <h1 className="main_heading">Profile</h1>
      <div className="wrapper d-flex flex-wrap">
          <ProfileInfo />
      </div>
    </main>
  )
}

export default Profile