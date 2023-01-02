import './CustomCheckBox.scss'

const CustomCheckBox = ({name, ischecked}) => {
  const handleCheckBox = (e) => {
    // e.target.checked
    // e.target.value
  }
  return (
    <div className='CustomCheckBox'>
      <input type="checkbox" name={name} id={name} value={name} defaultChecked={ischecked} onChange={handleCheckBox} />
      <label htmlFor={name} className="fs_16">{name}</label>
    </div>
  )
}

export default CustomCheckBox