import { ToggleCheckbox } from '../index';
import './SiteControl.scss';

const SiteControl = () => {
  return (
    <section className='SiteControl'>
      <h2>Site Control</h2>
      <p className='p_custom'>Control The Website If There Is Maintenance</p>
      <div className="website_control flex_between">
        <div className='flex-grow-1'>
          <p className='fs_16 mb-2'>Website Control</p>
          <p className='p_custom'>Open/Close Website And Type The Reason</p>
        </div>
        <ToggleCheckbox ischecked={true} />
      </div>
      <div className="website_control flex_between">
        <div className='flex-grow-1'>
          <p className='fs_16 mb-2'>Website Control</p>
          <p className='p_custom'>Open/Close Website And Type The Reason</p>
        </div>
        <ToggleCheckbox ischecked={true} />
      </div>
      <textarea name="closemessage" cols="30" rows="3" placeholder='Close Message Content'></textarea>
    </section>
  )
}

export default SiteControl