import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { data } from '../../constants'
import "./Courses.scss";

const Courses = () => {
  return (
    <main className="Courses">
      <h1>Courses</h1>
      <div className="wrapper">
        {
          data.CoursesData.map((box, i) =>
          (
            <section className='course' key={i}>
              <img className='imgbg' src={box.img} alt="courseBG" />
              <Link to='/profile' className='imgavatar'>
                <img src={box.avatar} alt="avatar" />
              </Link>
              <div className='content'>
                <h4>{box.name}</h4>
                <p className='p_custom'>{box.details}</p>
              </div>
              <div className='courseInfo custom_btn'>Course Info</div>
              <div className='footer flex_between fw-bold p_custom'>
                <span><FontAwesomeIcon icon={faUser} className='me-1' />{box.subs}</span>
                <span>{box.price}</span>
              </div>
            </section>
          ))
        }
      </div>
    </main>
  )
}

export default Courses