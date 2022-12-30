import { data } from "../../constants";
import './LatestNews.scss';

const LatestNews = () => {
  return (
    <section className='LatestNews'>
      <h2>Latest News</h2>
      <div className="LatestNews_cont">
        {
          data.LatestNewsData.map((ele, i) => 
          (
            <div className="latestnew flex_center" key={i}>
              <img src={ele.img} alt="news" />
              <div className="info flex-grow-1">
                <h4>{ele.title}</h4>
                <p className="p_custom mb-0">{ele.details}</p>
              </div>
              <div className="newsdate custom_btn">{ele.date}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default LatestNews