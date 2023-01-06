import { data } from '../../constants';
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line } from 'recharts';

const TimeUsed = () => {
  return (
    <section className='TimeUsed'>
      <h2>Time Used</h2>
      <div className='chartCont mt-4'>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={300}
            height={100}
            data={data.TimeUsedData}
            margin={{
              top: 5,
              right: 15,
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
        </ResponsiveContainer>
      </div>
    </section>
  )
}

export default TimeUsed