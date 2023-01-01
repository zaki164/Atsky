import './CustomCheckBox.scss'

const CustomCheckBox = ({name, ischecked}) => {
  return (
    <div className='CustomCheckBox'>
      <input type="checkbox" name={name} id={name} defaultChecked={ischecked}/>
      <label htmlFor={name} className="fs_16">{name}</label>
    </div>
  )
}

export default CustomCheckBox