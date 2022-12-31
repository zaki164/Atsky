import './ComponentOption.scss'

const ComponentOption = ({name, ischecked}) => {
  return (
    <div className='ComponentOption'>
      <input type="checkbox" name={name} id={name} defaultChecked={ischecked}/>
      <label htmlFor={name} className="fs_16">{name}</label>
    </div>
  )
}

export default ComponentOption