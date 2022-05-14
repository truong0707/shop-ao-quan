import React from 'react';
import './reuseComponents.css';

export default function Button(props) {
    return (
        <>
            <div className='box-btn-card-body-home'>
                <div className={props.classbtnType} onClick={props.handleButton}>
                    <p>{props.contentButton}</p >
                </div>
            </div>
        </>
    )
}
