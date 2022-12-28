import { LatestNews, QuickDraft, SearchItems, Tasks, Tickets, Welcome, YearlyTargets } from "../../components";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <main>
      <h1 className="main_heading">Dashboard</h1>
      <div className="wrapper">
        <Welcome />
        <QuickDraft />
        <YearlyTargets />
        <Tickets />
        <LatestNews />
        <Tasks />
        <SearchItems />
      </div>
    </main>
  )
}

export default Dashboard