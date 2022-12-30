import './CustomProgBar.scss';

const CustomProgBar = ({width, color}) => {
  return (
    <div className="prog">
      <div className={`progBar ${color}`} style={{width: width}} data-width={width}></div>
    </div>
  )
}

export default CustomProgBar