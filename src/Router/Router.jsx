import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CompLoader } from '../components';

const Courses = React.lazy(() => import("../pages/Courses/Courses"));
const Dashboard = React.lazy(() => import("../pages/Dashboard/Dashboard"));
const Files = React.lazy(() => import("../pages/Files/Files"));
const Friends = React.lazy(() => import("../pages/Friends/Friends"));
const Plans = React.lazy(() => import("../pages/Plans/Plans"));
const Profile = React.lazy(() => import("../pages/Profile/Profile"));
const Projects = React.lazy(() => import("../pages/Projects/Projects"));
const Settings = React.lazy(() => import("../pages/Settings/Settings"));

const Router = () => {
  return (
    <Suspense fallback={<CompLoader />}>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Friends" element={<Friends />} />
        <Route path="/Files" element={<Files />} />
        <Route path="/Plans" element={<Plans />} />
      </Routes>
    </Suspense>
  )
}

export default Router