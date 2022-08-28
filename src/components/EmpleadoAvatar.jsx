import React from 'react';
import {Image} from 'react-bootstrap';

const EmpleadoAvatar = (props) => {
    return (
        <Image className="mx-3" src={props.pic} alt={props.pic} />
    );
};

export default EmpleadoAvatar;