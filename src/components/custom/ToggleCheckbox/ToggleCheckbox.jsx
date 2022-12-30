import './ToggleCheckbox.scss';

const ToggleCheckbox = ({ischecked}) => {
  return (
    <label className='toggle_label'>
      <input className='toggle_checkbox' type="checkbox" defaultChecked={ischecked} />
      <div className="toggle_switch"></div>
    </label>
  )
}

export default ToggleCheckbox