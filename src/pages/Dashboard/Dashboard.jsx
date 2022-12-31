import { LastProjectProgress, LatestNews, LatestPost, LatestUploads, Projects, QuickDraft, Reminders, SearchItems, SocialMedia, Tasks, Tickets, Welcome, YearlyTargets } from "../../components";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <main>
      <h1>Dashboard</h1>
      <div className="wrapper">
        <Welcome />
        <QuickDraft />
        <YearlyTargets />
        <Tickets />
        <LatestNews />
        <Tasks />
        <SearchItems />
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