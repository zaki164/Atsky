import { data } from '../../constants'
import { CustomCheckBox } from '../index'
import './Widgets.scss'

const Widgets = () => {
  return (
    <section className='Widgets'>
      <h2>Widgets Control</h2>
      <p className='p_custom'>Show/Hide Widgets</p>
      {
        Object.keys(data.WidgetsData).map((ele, i) => 
        (
          <CustomCheckBox name={ele} ischecked={data.WidgetsData[ele]} key={i} />
        ))
      }
    </section>
  )
}

export default Widgets