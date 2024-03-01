import PropTypes from 'prop-types'
import './Liste.css'
import { ReactComponent as Listes } from '../icon/liste.svg'
function Liste({ onClick, isMap }) {
  return (
    <button
      className={`btn-layout-2 ${isMap ? 'is-not-active' : 'is-active'} font-bold py-2 px-4 rounded`}
      onClick={onClick}
      type="button"
    >
      <Listes />
      Liste
    </button>
  );
}

Liste.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['submit', 'reset', 'button'])

}

export default Liste
