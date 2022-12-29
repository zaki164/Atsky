import { Link } from 'react-router-dom';
import { data } from '../../constants';
import './Projects.scss';

const Projects = () => {
  return (
    <section className='Projects'>
      <h2>Projects</h2>
      <div className="projects_table">
        <table className='w-100'>
          <thead>
            <tr>
              <td>Name</td>
              <td>Finish Date</td>
              <td>Client</td>
              <td>Price</td>
              <td>Team</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {
              data.Projects.map((ele, i) =>
              (
                <tr key={i}>
                  <td>{ele.Name}</td>
                  <td>{ele.FinishDate} Date</td>
                  <td>{ele.Client}</td>
                  <td>{ele.Price}</td>
                  <td>
                    {
                      ele.Team.map((img, i) =>
                      (
                        <Link to="/Profile" className='image_holder' key={i}>
                          <img src={img} alt="teamImg" />
                        </Link>
                      ))
                    }
                  </td>
                  <td><span className={`status custom_btn ${ele.Status}`}>{ele.Status}</span></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Projects