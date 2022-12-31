import './SecurityInfo.scss'

const SecurityInfo = () => {
  return (
    <section className='SecurityInfo'>
      <h2>SecurityInfo</h2>
      <p className='p_custom'>Security Information About Your Account</p>
      <ul className='flex-column'>
        <li className='flex_column'>
          <div>
            <p className='fs_16 mb-2'>Password</p>
            <p className='fs_16 p_custom'>Last Change On 25/10/2021</p>
          </div>
          <button className='custom_btn'>Change</button>
        </li>
      </ul>
    </section>
  )
}

export default SecurityInfo