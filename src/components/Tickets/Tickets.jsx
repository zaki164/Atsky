import { data } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Tickets.scss';

const Tickets = () => {
  return (
    <section className='tickets'>
      <h2>Tickets Statistics</h2>
      <p className='p_custom'>Everything About Support Tickets</p>
      <div className="tickets_cont flex_between flex-wrap">
        {
          data.TicketsData.map((ele, i) =>
          (
            <div className={`ticket text-center ${ele.color}`} key={i}>
              <FontAwesomeIcon icon={ele.icon} />
              <span className='number d-block fw-bold'>{ele.num}</span>
              <span className='p_custom d-block'>{ele.status}</span>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Tickets