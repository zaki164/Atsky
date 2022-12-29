import { data } from '../../constants';
import './LatestUploads.scss';

const LatestUploads = () => {
  return (
    <section className='LatestUploads'>
      <h2>Latest Uploads</h2>
      <ul className='flex-column'>
        {
          data.LatestUploadsData.map((ele, i) =>
          (
            <li className='flex_between' key={i}>
              <img src={ele.img} alt="fileImg" />
              <div className="info flex-grow-1">
                <p className='title mb-0'>{ele.title}</p>
                <p className="p_custom mb-0">{ele.author}</p>
              </div>
              <div className="size custom_btn">{ele.size}mb</div>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default LatestUploads