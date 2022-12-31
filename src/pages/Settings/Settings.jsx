import { GeneralInfo, SiteControl } from '../../components';
import "./Settings.scss";

const Settings = () => {
  return (
    <main>
      <h1>Settings</h1>
      <div className="wrapper">
        <SiteControl />
        <GeneralInfo />
      </div>
    </main>
  )
}

export default Settings