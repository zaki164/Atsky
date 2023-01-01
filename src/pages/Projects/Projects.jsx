import { Link } from 'react-router-dom'
import { CustomProgBar } from '../../components'
import { data } from '../../constants'
import "./Projects.scss"

const Projects = () => {
  return (
    <main className="Projects">
      <h1>Projects</h1>
      <div className="wrapper">
        {
          data.ProjectsData.map((box, i) =>
          (
            <section className='project d-flex flex-column' key={i}>
              <div>
                <h4>{box.author}</h4>
                <p className='p_custom'>{box.title}</p>
              </div>
              <div className='profiles d-flex flex-wrap'>
                {box.imgs.map((img, i) =>
                (
                  <Link to="/Profile" className='image_holder' key={i}>
                    <img src={img} alt="teamImg" />
                  </Link>
                ))}
              </div>
              <div className='details d-flex align-items-center flex-wrap'>
                {
                  box.details.map((detail, i) => 
                  (
                    <span className='custom_btn' key={i}>{detail}</span>
                  ))
                }
              </div>
              <div className='date p_custom'>{box.date}</div>
              <div className='stats flex_between'>
                <CustomProgBar color={box.color} width={box.width} />
                <span className='p_custom fw-bold'>{box.price}</span>
              </div>
            </section>
          ))
        }
      </div>
    </main>
  )
}

export default Projects