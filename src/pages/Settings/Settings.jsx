import { GeneralInfo, SecurityInfo, SiteControl } from '../../components';
import "./Settings.scss";

const Settings = () => {
  return (
    <main>
      <h1>Settings</h1>
      <div className="wrapper">
        <SiteControl />
        <GeneralInfo />
        <SecurityInfo />
      </div>
    </main>
  )
}

export default Settings