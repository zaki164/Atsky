import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Tasks.scss';

const Tasks = () => {
  const handledelete = (e) => {
    e.currentTarget.parentElement.style.display = "none";
  }
  const TasksData = [
    {
      name: "Record One New Video",
      detail: "Record Python Create Exe Project"
    },
    {
      name: "Write Article",
      detail: "Write Low Level vs High Level Languages"
    },
    {
      name: "Finish Project",
      detail: "Publish Academy Programming Project"
    },
    {
      name: "Attend The Meeting",
      detail: "Attend The Project Business Analysis Meeting",
      done: true
    },
    {
      name: "Finish Lesson",
      detail: "Finish Teaching Flex Box"
    },
  ]

  return (
    <section className='tasks'>
      <h2>Latest Tasks</h2>
      <ul className='flex-column'>
        {
          TasksData.map((ele, i) =>
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