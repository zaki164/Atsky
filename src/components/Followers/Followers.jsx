import { data } from '../../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Followers = () => {
  return (
    <section className='Followers'>
      <h2>Followers</h2>
      <div className='chartCont mt-4'>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data.FollowersData}
          margin={{
            top: 5,
            right: 15,
            left: -8,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Followers" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </section>
  )
}

export default Followers