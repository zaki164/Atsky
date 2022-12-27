import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { images } from '../../constants';
import './Header.scss';
import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';

const Header = () => {
  const notify = useRef();
  const stopPropa = e => {
    e.stopPropagation();
  }
  const viewNotify = (e) => {
    stopPropa(e);
    notify.current.nextSibling.classList.toggle("show");
  }
  useEffect(() => {
    const tooltip_not = notify.current.nextSibling;
    document.addEventListener("click", e => {
      if (tooltip_not.classList.contains("show")) {
        if(e.target !== notify.current) {
          notify.current.nextSibling.classList.toggle("show");
        }
      }
    })
  })
  return (
    <header className='custom_shadow flex_between'>
      <div className='search'>
        <input type="search" placeholder='Type A Keyword' />
      </div>
      <div className='icons position-relative flex_center'>
        <span className='notification' ref={notify} onClick={viewNotify}>
          <FontAwesomeIcon icon={faBell} />
        </span>
        <div className='tooltip_not custom_shadow'>
          <span className='active'>Ahmed added a post</span>
          <span>Ahmed liked your photo</span>
          <span>Ali liked your photo</span>
        </div>
        <Link to="/Profile">
          <img src={images.avatar} alt="profile" />
        </Link>
      </div>
    </header>
  )
}
export default Header;
