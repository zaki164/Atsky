import { data } from '../../constants';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Tasks.scss';

const Tasks = () => {
  const handledelete = (e) => {
    e.currentTarget.parentElement.style.display = "none";
  }

  return (
    <section className='tasks'>
      <h2>Latest Tasks</h2>
      <ul className='flex-column'>
        {
          data.TasksData.map((ele, i) =>
          (
            <li key={i} className={`flex_between ${ele.done ? "done" : ""}`}>
              <div className="task">
                <h4>{ele.name}</h4>
                <p className='p_custom mb-0'>{ele.detail}</p>
              </div>
              <span className='delete' onClick={handledelete}>
                <FontAwesomeIcon icon={faTrashCan} />
              </span>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default Tasks