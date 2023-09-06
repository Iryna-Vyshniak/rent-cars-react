import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LogoCar from '../assets/images/logo.png';
import { scrollToTop } from '../shared/utils';

import Title from './Title';

const Logo = ({ className, classText, text }) => {
  return (
    <div className="navbar-logo">
      <Link to="/" onClick={scrollToTop} className={classText ? 'flex items-center' : ''}>
        <img
          src={LogoCar}
          alt="logo"
          width="100%"
          height="100%"
          className={className ? `${className}` : ''}
        />
        {text && <Title className={classText ? `${classText}` : ''}>{text}</Title>}
      </Link>
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  classText: PropTypes.string,
  text: PropTypes.string
};

export default Logo;
