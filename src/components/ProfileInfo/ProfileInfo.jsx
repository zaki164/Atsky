import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regstar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { images } from '../../constants';
import { CustomProgBar, ToggleCheckbox } from '../index';
import { data } from '../../constants';
import './ProfileInfo.scss';

const ProfileInfo = () => {
  return (
    <section className='ProfileInfo flex_center w-100'>
      <div className="avatar_box flex_center flex-column text-center">
        <img src={images.avatar} alt="avatar" />
        <h2 className='mb-0'>Zaki Mohsen</h2>
        <p className='level mb-0'>Level 88</p>
        <CustomProgBar width="80%" color="blue" />
        <div className="stars flex_center gap-2">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={regstar} />
        </div>
        <p className='p_custom mb-0'>550 Rating</p>
      </div>
      <div className="information flex-grow-1">
        {
          Object.keys(data.ProfileInfo).map((box, i) =>
          (
            <div className="information_box d-flex flex-column" key={i}>
              <h4 className='information_box_title mb-2'>{box}</h4>
              <div className="information_box_details flex_between flex-wrap">
                {
                  Object.keys(data.ProfileInfo[box]).map((ele, i) =>
                  (
                    ele === "checked" ?
                      <div className='mb-0' key={i}>
                        <ToggleCheckbox ischecked={data.ProfileInfo[box][ele]} />
                      </div> :
                      <div className='p_custom mb-0' key={i}>{ele}:<span className='ms-1'>{data.ProfileInfo[box][ele]}</span></div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}
export default ProfileInfo