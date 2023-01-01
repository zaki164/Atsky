import './CustomRadio.scss'

const CustomRadio = ({name, id, ischecked}) => {
  return (
    <div className='CustomRadio'>
      <input type="radio" id={id} name={name} defaultChecked={ischecked} />
      <label htmlFor={id} className="fs_16">{id}</label>
    </div>
  )
}

export default CustomRadio