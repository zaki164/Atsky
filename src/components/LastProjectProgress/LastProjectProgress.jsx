import { images } from '../../constants';
import './LastProjectProgress.scss';

const LastProjectProgress = () => {
  return (
    <section className='project_progress position-relative'>
      <h2>Last Project Progress</h2>
      <ul className='flex-column position-relative'>
        <li className='done'>Got The Project</li>
        <li className='done'>Started The Project</li>
        <li className='done'>The Project About To Finish</li>
        <li className='current'>Test The Project</li>
        <li>Finish The Project</li>
      </ul>
      <img src={images.project} alt="project" className='hide_mobile' />
    </section>
  )
}

export default LastProjectProgress