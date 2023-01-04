import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CompLoader.scss';

const CompLoader = () => {
  return (
    <div className="compLoader flex_center">
      <FontAwesomeIcon icon={faSpinner} spin />
    </div>
  )
}

export default CompLoader