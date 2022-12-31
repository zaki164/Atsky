import { faFacebookF, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SocialInfo.scss'

const SocialInfo = () => {
  return (
    <section className='SocialInfo'>
      <h2>Social Info</h2>
      <p className='p_custom'>Social Media Information</p>
      <ul className='flex-column'>
        <li className='flex_center Twitter'>
          <FontAwesomeIcon icon={faTwitter} />
          <input type="text" name='Twitter Username' placeholder='Twitter Username' />
        </li>
        <li className='flex_center Facebook'>
          <FontAwesomeIcon icon={faFacebookF} />
          <input type="text" name='Facebook Username' placeholder='Facebook Username' />
        </li>
        <li className='flex_center Linkedin'>
          <FontAwesomeIcon icon={faLinkedin} />
          <input type="text" name='Linkedin Username' placeholder='Linkedin Username' />
        </li>
        <li className='flex_center Youtube'>
          <FontAwesomeIcon icon={faYoutube} />
          <input type="text" name='Youtube Username' placeholder='Youtube Username' />
        </li>
      </ul>
    </section>
  )
}

export default SocialInfo