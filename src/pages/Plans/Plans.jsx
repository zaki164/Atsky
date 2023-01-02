import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../../constants";
import "./Plans.scss";

const Plans = () => {
  return (
    <main className="Plans">
      <h1>Plans</h1>
      <div className="wrapper">
        {
          data.PlansData.map((plan, i) =>
          (
            <section className={`plan ${plan.color}`} key={i}>
              <div className="header text-center">
                <h2>{plan.plan}</h2>
                <p className="mb-0 price">{plan.price}</p>
              </div>
              <ul className="flex-column">
                {
                  plan.allow.map((ele, i) =>
                  (
                    <li className="allow flex_between" key={i}>
                      <span className="me-1">{ele}</span>
                      <FontAwesomeIcon icon={faCircleInfo} className="info" />
                    </li>
                  ))
                }
                {
                  plan.blocked.map((ele, i) =>
                  (
                    <li className="blocked flex_between" key={i}>
                      <span className="me-1">{ele}</span>
                      <FontAwesomeIcon icon={faCircleInfo} className="info" />
                    </li>
                  ))
                }
              </ul>
              <div className="footer">
                {
                  plan.current ? <p className="mb-0 fs_15 m-auto">This Is Your Current PLan</p> : <span className="custom_btn">Join</span>
                }
              </div>
            </section>
          ))
        }
      </div>
    </main>
  )
}

export default Plans