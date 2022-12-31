import { GeneralInfo, SecurityInfo, SiteControl, SocialInfo } from '../../components';
import "./Settings.scss";

const Settings = () => {
  return (
    <main>
      <h1>Settings</h1>
      <div className="wrapper">
        <SiteControl />
        <GeneralInfo />
        <SecurityInfo />
        <SocialInfo />
      </div>
    </main>
  )
}

export default Settings