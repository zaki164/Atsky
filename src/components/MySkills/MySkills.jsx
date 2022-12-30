import { data } from '../../constants';
import './MySkills.scss';

const MySkills = () => {
  return (
    <section className='MySkills'>
      <h2>My Skills</h2>
      <p className='p_custom'>Complete Skills List</p>
      <ul className='flex-column'>
        {
          Object.keys(data.SkillsData).map(ele =>
          (
            <li className='d-flex align-items-center flex-wrap' key={ele}>
              {
                data.SkillsData[ele].map((skill, i) =>
                (
                  <span className='custom_btn' key={i}>{skill}</span>
                ))
              }
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default MySkills