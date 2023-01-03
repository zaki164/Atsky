import { useEffect, useRef } from "react";
import { LatestActivities, MySkills, ProfileInfo } from "../../components";
import "./Profile.scss";

const Profile = () => {
  const wrapperRef = useRef();
  useEffect(() => {
    [...wrapperRef.current.children].forEach(ele => {
      ele.setAttribute('data-aos', "fade-up")
    })
  }, [])
  return (
    <main className="Profile">
      <h1>Profile</h1>
      <div className="wrapper d-flex flex-wrap" ref={wrapperRef}>
          <ProfileInfo />
          <MySkills />
          <LatestActivities />
      </div>
    </main>
  )
}

export default Profile