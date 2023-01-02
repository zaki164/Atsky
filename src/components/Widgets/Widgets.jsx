import { useSelector } from 'react-redux'
import { CustomCheckBox } from '../index'
import './Widgets.scss'

const Widgets = () => {
  const widgetsDataReducer = useSelector(state => state)
  return (
    <section className='Widgets'>
      <h2>Widgets Control</h2>
      <p className='p_custom'>Show/Hide Widgets</p>
      {
        Object.keys(widgetsDataReducer).map((ele, i) => 
        (
          <CustomCheckBox name={ele} ischecked={widgetsDataReducer[ele]} key={i} />
        ))
      }
    </section>
  )
}

export default Widgets