import { Route, Routes } from 'react-router-dom';
import { Courses, Dashboard, Files, Friends, Plans, Profile, Projects, Settings } from "../pages"

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route path="/Settings" element={<Settings />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Courses" element={<Courses />} />
      <Route path="/Friends" element={<Friends />} />
      <Route path="/Files" element={<Files />} />
      <Route path="/Plans" element={<Plans />} />
    </Routes>
  )
}

export default Router