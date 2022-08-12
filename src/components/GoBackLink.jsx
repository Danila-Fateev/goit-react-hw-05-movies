import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function GoBackLink({ to }) {
  return <Link to={to}>Go back</Link>;
}

GoBackLink.propTypes = {
  to: PropTypes.object.isRequired,
};
