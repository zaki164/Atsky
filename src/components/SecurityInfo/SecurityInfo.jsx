import './SecurityInfo.scss'
import { ToggleCheckbox } from '../index' 

const SecurityInfo = () => {
  return (
    <section className='SecurityInfo'>
      <h2>Security Info</h2>
      <p className='p_custom'>Security Information About Your Account</p>
      <ul className='flex-column'>
        <li className='flex_between'>
          <div>
            <p className='fs_16 mb-2'>Password</p>
            <p className='mb-0 p_custom'>Last Change On 25/10/2021</p>
          </div>
          <button className='custom_btn'>Change</button>
        </li>
        <li className='flex_between'>
          <div>
            <p className='fs_16 mb-2'>Two-Factor Authentication</p>
            <p className='mb-0 p_custom'>Enable/Disable The Feature</p>
          </div>
          <ToggleCheckbox ischecked={false} />
        </li>
        <li className='flex_between'>
          <div>
            <p className='fs_16 mb-2'>Devices</p>
            <p className='mb-0 p_custom'>Check The Login Devices List</p>
          </div>
          <button className='custom_btn devices'>Devices</button>
        </li>
      </ul>
    </section>
  )
}

export default SecurityInfo