import './QuickDraft.scss';

const QuickDraft = () => {
  return (
    <section className='QuickDraft'>
      <h2>Quick Draft</h2>
      <p className='p_custom'>Write A Draft For Your Ideas</p>
      <form>
        <input type="text" name='Title' placeholder='Title' />
        <textarea name="Your Thought" placeholder='Your Thought' cols="30" rows="7"></textarea>
        <input type="submit" value="Save" className='custom_btn ms-auto d-block' />
      </form>
    </section>
  )
}

export default QuickDraft