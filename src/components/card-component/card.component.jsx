import React from 'react';
import './card.styles.css';

const Card = ({ title, price, advantages }) => {

    return (
        <div className='pricing-column col-lg-4 col-md-6'>
            <div className='card'>
                <div className='card-header'>
                    <h3>{title}</h3>
                </div>
                <div className='card-body'>
                    <h2>{price}</h2>
                    {advantages.map(advantage => <p key={advantage}>{advantage}</p>)}
                    <button
                        type='button'
                        className='btn btn-dark'
                    >Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Card;