import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { LastProjectProgress, LatestNews, LatestPost, LatestUploads, Projects, QuickDraft, Reminders, SearchItems, SocialMedia, Tasks, Tickets, Welcome, YearlyTargets } from "../../components";
import "./Dashboard.scss";
import AOS from 'aos';
AOS.init({
  once: true,
});

const Dashboard = () => {
  const widgetsDataReducer = useSelector(state => state)
  const wrapperRef = useRef();
  useEffect(() => {
    [...wrapperRef.current.children].forEach(ele => {
      ele.setAttribute('data-aos', "fade-up")
    })
  })
  return (
    <main className="Dashboard">
      <h1>Dashboard</h1>
      <div className="wrapper" ref={wrapperRef}>
        <Welcome />
        {widgetsDataReducer["Quick Draft"] && <QuickDraft />}
        {widgetsDataReducer["Yearly Targets"] && <YearlyTargets />}
        {widgetsDataReducer["Tickets Statistics"] && <Tickets />}
        {widgetsDataReducer["Latest News"] && <LatestNews />}
        {widgetsDataReducer["Latest Tasks"] && <Tasks />}
        {widgetsDataReducer["Top Search Items"] && <SearchItems />}
        <LatestUploads />
        <LastProjectProgress />
        <Reminders />
        <LatestPost />
        <SocialMedia />
      </div>
      <Projects />
    </main>
  )
}

export default Dashboard