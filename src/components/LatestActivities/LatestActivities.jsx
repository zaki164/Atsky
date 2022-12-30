import { data } from '../../constants';
import './LatestActivities.scss';

const LatestActivities = () => {
  return (
    <section className='LatestActivities'>
      <h2>LatestActivities</h2>
      <p className='p_custom'>Latest Activities Done By The User</p>
      <ul className='flex-column'>
      {
        data.ActivitiesData.map((ele, i) => 
        (
          <li className='flex_between' key={i}>
            <img src={ele.img} alt="activity" />
            <div className='flex-grow-1'>
              <p className='mb-2'>{ele.name}</p>
              <p className='p_custom mb-0'>{ele.details}</p>
            </div>
            <div className='date'>
              <p className='mb-2'>{ele.time}</p>
              <p className='p_custom mb-0'>{ele.date}</p>
            </div>
          </li>
        ))
      }
      </ul>
    </section>
  )
}

export default LatestActivities