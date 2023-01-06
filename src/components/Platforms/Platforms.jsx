import { data } from '../../constants'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import './Platforms.scss'
import { useEffect } from 'react';

const Platforms = () => {
  const handlerad = () => {
    if (window.innerWidth < 768) {
      [...document.getElementsByTagName("tspan")][5].setAttribute('dy', '-.5em');
      [...document.getElementsByTagName("tspan")][5].setAttribute('x', '45');
    }
  }
  useEffect(() => {
    setTimeout(() => {
      [...document.getElementsByTagName("tspan")][3].setAttribute('dy', '.5em');
      handlerad();
    }, 10)
  }, [])
  return (
    <section className='Platforms'>
      <h2>Platforms</h2>
      <div className='chartCont mt-2'>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data.PlatformsData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="platform" />
            <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}

export default Platforms