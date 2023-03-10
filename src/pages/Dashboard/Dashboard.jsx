import { useLayoutEffect } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { Platforms, LastProjectProgress, LatestNews, LatestPost, LatestUploads, Projects, QuickDraft, Reminders, SearchItems, SocialMedia, Tasks, Tickets, Welcome, YearlyTargets, TimeUsed, Followers, Views } from "../../components";
import "./Dashboard.scss";

const Dashboard = () => {
  const widgetsDataReducer = useSelector(state => state)
  const wrapperRef = useRef();
  useLayoutEffect(() => {
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
        <Platforms />
        {widgetsDataReducer["Yearly Targets"] && <YearlyTargets />}
        <LastProjectProgress />
        <Views />
        {widgetsDataReducer["Tickets Statistics"] && <Tickets />}
        <Followers />
        {widgetsDataReducer["Latest News"] && <LatestNews />}
        {widgetsDataReducer["Latest Tasks"] && <Tasks />}
        {widgetsDataReducer["Top Search Items"] && <SearchItems />}
        <LatestUploads />
        <TimeUsed />
        <Reminders />
        <LatestPost />
        <SocialMedia />
      </div>
      <Projects />
    </main>
  )
}

export default Dashboard