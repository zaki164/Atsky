import { useRef } from 'react';
import './GeneralInfo.scss';

const GeneralInfo = () => {
  const emailRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const handleEmail = () => {
    emailRef.current.classList.remove("disabled");
    emailRef.current.removeAttribute("disabled");
    emailRef.current.focus();
  }
  const handleBlur = () => {
    emailRef.current.classList.add("disabled");
    emailRef.current.setAttribute("disabled", "")
  }

  return (
    <section className='GeneralInfo'>
      <h2>General Info</h2>
      <p className='p_custom'>General Information About Your Account</p>
      <form action='' onSubmit={handleSubmit}>
        <label className='fs_16' htmlFor="first name">First Name</label>
        <input className='fs_16' type="text" id='first name' name='first name' placeholder='First Name' />
        <label className='fs_16' htmlFor="last name">Last Name</label>
        <input type="text" id='last name' name='last name' placeholder='Last Name' />
        <label className='fs_16' htmlFor="email">Email</label>
        <input className='disabled' type="email" id='email' name='email' placeholder='o@nn.sa' disabled ref={emailRef} onBlur={handleBlur} />
        <button className='fs_16' onClick={handleEmail}>Change</button>
      </form>
    </section>
  )
}

export default GeneralInfo