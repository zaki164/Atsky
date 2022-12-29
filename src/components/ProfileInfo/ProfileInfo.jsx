import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regstar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { images } from '../../constants';
import { CustomProgBar } from '../index';
import './ProfileInfo.scss';

const ProfileInfo = () => {
  return (
    <section className='ProfileInfo flex_center w-100'>
      <div className="avatar_box flex_center flex-column">
        <img src={images.avatar} alt="avatar" />
        <h2 className='mb-0'>Zaki Mohsen</h2>
        <p className='level mb-0'>Level 88</p>
        <CustomProgBar width="80%" color="#0075ff" />
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

      </div>
    </section>
  )
}

export default ProfileInfo