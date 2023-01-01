import { faEnvelope, faFaceSmile, faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faCodeCommit, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { data } from '../../constants'
import "./Friends.scss";

const Friends = () => {
  const handleClick = (e) => {
    e.currentTarget.offsetParent.style.display = "none";
  }
  return (
    <main className='Friends'>
      <h1>Friends</h1>
      <div className="wrapper">
        {
          data.FriendsData.map((box, i) =>
          (
            <section className="friend_box position-relative" key={i}>
              <div className='contact position-absolute'>
                <FontAwesomeIcon icon={faPhone} className="me-1" />
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="head flex_center flex-column">
                <img src={box.img} alt="friendImg" />
                <h4 className='mb-0'>{box.name}</h4>
                <p className='p_custom mb-0'>{box.job}</p>
              </div>
              <div className="details position-relative">
                <p className='p_custom mb-2'><FontAwesomeIcon icon={faFaceSmile} className="me-1" fixedWidth />{box.friendsNum} Friend</p>
                <p className='p_custom mb-2'><FontAwesomeIcon icon={faCodeCommit} className="me-1" fixedWidth />{box.projectsNum} Projects</p>
                <p className='p_custom mb-0'><FontAwesomeIcon icon={faNewspaper} className="me-1" fixedWidth />{box.articlesNum} Articles</p>
                {
                  box.vip && <div className='vip'>VIP</div> 
                }
              </div>
              <div className="footer flex_between">
                <p className='p_custom mb-0'>Joined {box.joined}</p>
                <div className="options">
                  <Link to="/profile" className='profile custom_btn me-1'>Profile</Link>
                  <Link to="#" className='remove custom_btn' onClick={handleClick}>Remove</Link>
                </div>
              </div>
            </section>
          ))
        }
      </div>
    </main>
  )
}

export default Friends