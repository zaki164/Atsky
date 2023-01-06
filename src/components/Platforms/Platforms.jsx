import { data } from '../../constants'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import './Platforms.scss'
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const data = [
//   {
//     Day: 'Fri',
//     Hours: 4,
//   },
//   {
//     Day: 'Sat',
//     Hours: 1,
//   },
//   {
//     Day: 'Sun',
//     Hours: 8,
//   },
//   {
//     Day: 'Mon',
//     Hours: 3,
//   },
//   {
//     Day: 'Tue',
//     Hours: 5,
//   },
//   {
//     Day: 'Wed',
//     Hours: 2.5,
//   },
//   {
//     Day: 'Thu',
//     Hours: 4,
//   },
// ];

const Platforms = () => {
  return (
    <section className='Platforms'>
      <h2>Platforms</h2>
      <div className='chartCont mt-4'>
        {/* <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={300}
            height={100}
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: -40,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="Day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="Hours" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer> */}
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