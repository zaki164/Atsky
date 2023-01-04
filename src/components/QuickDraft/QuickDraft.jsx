import { useRef } from 'react';
import './QuickDraft.scss';

const QuickDraft = (e) => {
  const titleRef = useRef()
  const thoughtRef = useRef()
  const handleSubmit = (e) => {
    if (titleRef.current.value === '' || thoughtRef.current.value === '') {
      e.preventDefault();
    }
  }
  return (
    <section className='QuickDraft'>
      <h2>Quick Draft</h2>
      <p className='p_custom'>Write A Draft For Your Ideas</p>
      <form action='' onSubmit={handleSubmit}>
        <input type="text" name='Title' placeholder='Title' ref={titleRef}/>
        <textarea name="Your Thought" placeholder='Your Thought' cols="30" rows="7" ref={thoughtRef}></textarea>
        <input type="submit" value="Save" className='custom_btn ms-auto d-block' />
      </form>
    </section>
  )
}

export default QuickDraft