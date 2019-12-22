import React from 'react';
import spinner from '../../../assets/images/Spinner.gif';
import PropTypes from 'prop-types';

const Spinner = () => {
    return (
        <img style={{"width":"20%"}} src={spinner} />
    )
}

Spinner.propTypes = {
    src: PropTypes.object
}

Spinner.defaultProps = {
    src: {}
}

export default Spinner;