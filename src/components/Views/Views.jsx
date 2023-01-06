import { data } from '../../constants';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Views = () => {
  return (
    <section>
      <h2>Views</h2>
      <div className='chartCont mt-4'>
        <ResponsiveContainer>
          <AreaChart
            data={data.ViewsData}
            margin={{
              top: 5,
              right: 15,
              left: -8,
              bottom: -5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Month" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="Views" stroke="#22c55e" fill="#22c55e" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}

export default Views