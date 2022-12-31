import { GeneralInfo, SecurityInfo, SiteControl, SocialInfo, Widgets } from '../../components';
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
        <Widgets />
      </div>
    </main>
  )
}

export default Settings