import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { images } from '../../constants';
import './Header.scss';
import { Link } from 'react-router-dom';
import { useRef, useEffect, useState, useLayoutEffect } from 'react';

const Header = () => {
  const [light, setlight] = useState(false);
  const lightlocal = localStorage.getItem("Light Mode");
  const notify = useRef();
  const stopPropa = e => {
    e.stopPropagation();
  }
  const viewNotify = (e) => {
    stopPropa(e);
    notify.current.nextSibling.classList.toggle("show");
  }
  const handleDarkMode = (e) => {
    stopPropa(e);
    setlight(!light);
    document.body.classList.toggle('light');
    localStorage.setItem("Light Mode", !light);
  }
  useLayoutEffect(() => {
    if (lightlocal) {
      if (lightlocal === "true") {
        setlight(true);
        document.body.classList.add('light');
      }
    }
  }, [lightlocal])
  useEffect(() => {
    const tooltip_not = notify.current.nextSibling;
    document.addEventListener("click", e => {
      if (tooltip_not.classList.contains("show")) {
        if (e.target !== notify.current) {
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
        <span className='themeIcon' onClick={handleDarkMode}>{light ? <FontAwesomeIcon icon={faMoon} className="moon"/> : <FontAwesomeIcon icon={faLightbulb} className="sun"/>}</span>
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
