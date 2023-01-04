import { useEffect, useRef } from 'react';
import { BackupManager, GeneralInfo, SecurityInfo, SiteControl, SocialInfo, Widgets } from '../../components';
import "./Settings.scss";

const Settings = () => {
  const wrapperRef = useRef();
  // useEffect(() => {
  //   [...wrapperRef.current.children].forEach(ele => {
  //     ele.setAttribute('data-aos', "fade-up")
  //   })
  // }, [])
  return (
    <main className='Setting'>
      <h1>Settings</h1>
      <div className="wrapper" ref={wrapperRef}>
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