import { faServer } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fragment } from 'react'
import { data } from '../../constants'
import { CustomRadio } from '../index'
import './BackupManager.scss'

const BackupManager = () => {

  return (
    <section className='BackupManager'>
      <h2>Backup Manager</h2>
      <p className='p_custom'>Control Backup Time And Location</p>
      <CustomRadio name="period" id="Daily" ischecked={false} />
      <CustomRadio name="period" id="Weekly" ischecked={true} />
      <CustomRadio name="period" id="Monthly" ischecked={false} />
      <div className='d-flex server'>
        {
          data.ServerNames.map((server, i) =>
          (
            <Fragment key={i}>
              <input type="radio" name='server' id={server} defaultChecked />
              <div className='flex-grow-1 text-center'>
                <label htmlFor={server}>
                  <FontAwesomeIcon icon={faServer} />
                  <span className='d-block fs_16'>{server}</span>
                </label>
              </div>
            </Fragment>
          ))
        }
      </div>
    </section>
  )
}

export default BackupManager