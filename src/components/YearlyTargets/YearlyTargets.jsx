import { faCode, faDollarSign, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import './YearlyTargets.scss';

const YearlyTargets = () => {
  const yearlyData = [
    {
      icon: faDollarSign,
      name: "Money",
      number: "$20.000",
      Per: "80%",
      color: "blue"
    },
    {
      icon: faCode,
      name: "Projects",
      number: "24",
      Per: "55%",
      color: "orange"
    },
    {
      icon: faUser,
      name: "Team",
      number: "12",
      Per: "75%",
      color: "green"
    },
  ]
  useEffect(() => {
    const bars = Array.from(document.getElementsByClassName("progBar"));
    bars.forEach(ele => {
      ele.style.width = ele.dataset.width;
    });
  }, [])
  
  return (
    <section className='YearlyTargets'>
      <h2>Yearly Targets</h2>
      <p className='p_custom'>Targets Of The Year</p>
      <div className='targets d-flex flex-column'>
        {
          yearlyData.map((ele, i) =>
          (
            <div className={`target ${ele.color}`} key={i}>
              <div className="icon flex_center">
                <FontAwesomeIcon icon={ele.icon} />
              </div>
              <div className="content flex-grow-1">
                <p className='p_custom fw-bold mb-0'>{ele.name}</p>
                <span className='num d-block fw-bold'>{ele.number}</span>
                <div className="prog">
                  <div className="progBar" data-width={ele.Per}></div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default YearlyTargets