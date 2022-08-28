import React from 'react';
import { Badge } from 'react-bootstrap';
import EmpleadoAvatar from './EmpleadoAvatar';

const EmpleadoRow = (props) => {
    return (
        <div className='my-1 d-flex justify-content-start border-bottom'>
            <EmpleadoAvatar pic={props.empleado.pic}/>
            <div className='d-flex flex-column justify-content-center'>
                <h5 className=''>{props.empleado.fullName}</h5>
                <div className='d-flex justify-content-start'>
                    <p>{props.empleado.title} <Badge bg="primary">{props.empleado.department}</Badge></p>
                </div>
            </div>
        </div>
    );
};

export default EmpleadoRow;