import { LatestActivities, MySkills, ProfileInfo } from "../../components";
import "./Profile.scss";

const Profile = () => {
  return (
    <main className="Profile">
      <h1>Profile</h1>
      <div className="wrapper d-flex flex-wrap">
          <ProfileInfo />
          <MySkills />
          <LatestActivities />
      </div>
    </main>
  )
}

export default Profile