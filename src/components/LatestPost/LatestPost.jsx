import { faComments, faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { images } from "../../constants";
import './LatestPost.scss';

const LatestPost = () => {
  return (
    <section className='LatestPost'>
      <h2>LatestPost</h2>
      <div className="post_author d-flex">
        <img src={images.avatar} alt="avatar" />
        <div className="flex-grow-1">
          <h4>Zaki Mohsen</h4>
          <p className="p_custom mb-0">About 3 Hours Ago</p>
        </div>
      </div>
      <div className="post_body">
        You Can Fool All Of The People Some Of The Time, And Some Of The People All Of The Time, But You Can't Fool All Of The People All Of The Time.
      </div>
      <div className="post_details flex_between">
        <p><FontAwesomeIcon icon={faHeart} /><span>1.8k</span></p>
        <p><FontAwesomeIcon icon={faComments} /><span>500</span></p>
      </div>
    </section>
  )
}

export default LatestPost