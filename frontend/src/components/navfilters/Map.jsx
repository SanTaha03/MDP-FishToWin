import PropTypes from 'prop-types'
import './Map.css'
import { ReactComponent as Carte } from '../icon/carte.svg'
function Map({ onClick, isMap }) {
    return (
      <button
        className={`btn-layout ${isMap ? 'is-active' : 'is-not-active'}  font-bold py-2 px-4 rounded`}
        onClick={onClick}
        type="button"
      >
        <Carte />
        Carte
      </button>
    );
  }

Map.propTypes = {
  parent: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['submit', 'reset', 'button'])
}

export default Map
