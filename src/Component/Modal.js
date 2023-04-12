import React from 'react';

const Modal = (props) => {
    return (
        <div>
            <div className='modal' style={{backgroundColor : props.color}}>
                <h4>{props.name[props.title]}</h4>
                <p>상세 내용</p>
            </div>
        </div>
    );
};

export default Modal;

