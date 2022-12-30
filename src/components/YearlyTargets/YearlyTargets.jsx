import { data } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CustomProgBar } from '../index';
import './YearlyTargets.scss';

const YearlyTargets = () => {
  return (
    <section className='YearlyTargets'>
      <h2>Yearly Targets</h2>
      <p className='p_custom'>Targets Of The Year</p>
      <div className='targets d-flex flex-column'>
        {
          data.yearlyData.map((ele, i) =>
          (
            <div className={`target ${ele.color}`} key={i}>
              <div className="icon flex_center">
                <FontAwesomeIcon icon={ele.icon} />
              </div>
              <div className="content flex-grow-1">
                <p className='p_custom fw-bold mb-0'>{ele.name}</p>
                <span className='num d-block fw-bold'>{ele.number}</span>
                <CustomProgBar width={ele.Per} color={ele.color} />
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default YearlyTargets