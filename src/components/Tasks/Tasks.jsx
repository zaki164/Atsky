import { data } from '../../constants';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Tasks.scss';
import { useState, useRef, useEffect } from 'react';

const Tasks = () => {
  const TasksRef = useRef();
  const [updatedData, setupdatedData] = useState(JSON.parse(sessionStorage.getItem('Tasks')) || data.TasksData)
  const handlesessionStorage = (ele) => {
    let newarr = JSON.parse(sessionStorage.getItem('Tasks')).filter(element => element.id !== ele.id)
    setupdatedData(newarr)
    sessionStorage.setItem('Tasks', JSON.stringify(newarr));
  }
  const handledelete = (ele) => {
    if (!sessionStorage.getItem('Tasks')) {
      sessionStorage.setItem('Tasks', JSON.stringify(data.TasksData));
      handlesessionStorage(ele)
    } else {
      handlesessionStorage(ele)
    }
  }
  const ShowComp = () => {
    TasksRef.current.style.display = "none";
  }
  useEffect(() => {
    updatedData.length === 0 && ShowComp()
  }, [updatedData])
  
  return (
    <section className='tasks' ref={TasksRef}>
      <h2>Latest Tasks</h2>
      <ul className='flex-column'>
        {
          updatedData.map(ele =>
          (
            <li key={ele.id} className={`flex_between ${ele.done ? "done" : ""}`}>
              <div className="task">
                <h4>{ele.name}</h4>
                <p className='p_custom mb-0'>{ele.detail}</p>
              </div>
              <span className='delete' onClick={() => handledelete(ele)}>
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