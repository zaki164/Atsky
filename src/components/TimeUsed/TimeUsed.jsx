// import { data } from '../../constants'
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line } from 'recharts';
import './TimeUsed.scss';

const TimeUseddata = [
  {
    Day: 'Fri',
    Hours: 4,
  },
  {
    Day: 'Sat',
    Hours: 1,
  },
  {
    Day: 'Sun',
    Hours: 8,
  },
  {
    Day: 'Mon',
    Hours: 3,
  },
  {
    Day: 'Tue',
    Hours: 5,
  },
  {
    Day: 'Wed',
    Hours: 2.5,
  },
  {
    Day: 'Thu',
    Hours: 4,
  },
];

const TimeUsed = () => {
  return (
    <section className='TimeUsed'>
      <h2>Time Used</h2>
      <div className='chartCont mt-4'>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={300}
            height={100}
            data={TimeUseddata}
            margin={{
              top: 55,
              right: 10,
              left: -40,
              bottom: 55,
            }}
          >
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="Day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="Hours" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}

export default TimeUsed