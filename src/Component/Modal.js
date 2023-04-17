import React from 'react';

const Modal = (props) => {
    return (
        <div className='bg'>
            <div className='modal' style={{backgroundColor : props.color}}>
                <p className='delete' style={{textAlign : 'right'}}>X</p>
                <h4 style={{textAlign : 'center'}}>{props.name[props.title]}</h4>
                <p style={{textAlign : 'center', fontSize: '12px'}}>{props.date}</p>
            </div>
            
        </div>
    );
};

export default Modal;

