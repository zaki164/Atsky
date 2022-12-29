import './CustomProgBar.scss';

const CustomProgBar = ({width, color}) => {
  return (
    <div className="prog">
      <div className="progBar" style={{width: width, backgroundColor: color}}></div>
    </div>
  )
}

export default CustomProgBar