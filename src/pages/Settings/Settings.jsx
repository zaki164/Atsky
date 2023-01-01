import { BackupManager, GeneralInfo, SecurityInfo, SiteControl, SocialInfo, Widgets } from '../../components';
import "./Settings.scss";

const Settings = () => {
  return (
    <main className='Setting'>
      <h1>Settings</h1>
      <div className="wrapper">
        <SiteControl />
        <GeneralInfo />
        <SecurityInfo />
        <SocialInfo />
        <Widgets />
        <BackupManager />
      </div>
    </main>
  )
}

export default Settings