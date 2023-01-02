import { useSelector } from "react-redux";
import { LastProjectProgress, LatestNews, LatestPost, LatestUploads, Projects, QuickDraft, Reminders, SearchItems, SocialMedia, Tasks, Tickets, Welcome, YearlyTargets } from "../../components";
import "./Dashboard.scss";

const Dashboard = () => {
  const widgetsDataReducer = useSelector(state => state)
  return (
    <main className="Dashboard">
      <h1>Dashboard</h1>
      <div className="wrapper">
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