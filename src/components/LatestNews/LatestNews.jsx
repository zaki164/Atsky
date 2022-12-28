import { images } from "../../constants";
import './LatestNews.scss';

const LatestNews = () => {
  const LatestNewsData = [
    {
      img: images.news1,
      title: "Created SASS Section",
      details: "New SASS Examples & Tutorials",
      date: "3 Days Ago"
    },
    {
      img: images.news2,
      title: "Changed The Design",
      details: "A Brand New Website Design",
      date: "5 Days Ago"
    },
    {
      img: images.news3,
      title: "Team Increased",
      details: "3 Developers Joined The Team",
      date: "7 Days Ago"
    },
    {
      img: images.news4,
      title: "Added Payment Gateway",
      details: "Many New Payment Gateways Added",
      date: "9 Days Ago"
    }
  ]
  return (
    <section className='LatestNews'>
      <h2>Latest News</h2>
      <div className="LatestNews_cont">
        {
          LatestNewsData.map((ele, i) => 
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