import { data } from "../../constants";
import './Reminders.scss';

const Reminders = () => {
  return (
    <section className='Reminders'>
      <h2>Reminders</h2>
      <ul className='flex-column'>
        {
          data.Reminders.map((ele, i) => 
          (
            <li className={`position-relative ${ele.color}`} key={i}>
              <p className='fs_15 fw-bold mb-1'>{ele.title}</p>
              <p className='p_custom mb-0'>{ele.date}</p>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default Reminders