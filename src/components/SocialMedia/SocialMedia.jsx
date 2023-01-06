import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { data } from '../../constants';
import './SocialMedia.scss';

const SocialMedia = () => {
  return (
    <section className='SocialMedia'>
      <h2>Social Media Stats</h2>
        <ul className='flex-column'>
          {
            data.SocialMedia.map((ele, i) => 
            (
              <li key={i} className={`flex_center ${ele.platform}`}>
                <div className='icon flex_center'>
                  <FontAwesomeIcon icon={ele.icon} />
                </div>
                <div className="Platforms flex-grow-1 flex_between">
                  <span>{ele.Platforms}</span>
                  <Link to='/Profile' className='custom_btn'>{ele.subscribe}</Link>
                </div>
              </li>
            ))
          }
        </ul>
    </section>
  )
}

export default SocialMedia