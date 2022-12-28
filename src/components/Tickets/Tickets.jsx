import { faCircleCheck, faRectangleList, faRectangleXmark } from '@fortawesome/free-regular-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Tickets.scss';

const Tickets = () => {
  const TicketsData = [
    {
      icon: faRectangleList,
      num: 2500,
      status: "Total",
      color: "orange"
    },
    {
      icon: faSpinner,
      num: 500,
      status: "Pending",
      color: "blue"
    },
    {
      icon: faCircleCheck,
      num: 1900,
      status: "Closed",
      color: "green"
    },
    {
      icon: faRectangleXmark,
      num: 100,
      status: "Deleted",
      color: "red"
    }
  ]
  return (
    <section className='tickets'>
      <h2>Tickets Statistics</h2>
      <p className='p_custom'>Everything About Support Tickets</p>
      <div className="tickets_cont flex_between flex-wrap">
        {
          TicketsData.map((ele, i) =>
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