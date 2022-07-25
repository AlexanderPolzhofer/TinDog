import React from 'react';
import Card from '../card-component/card.component';
import cardContent from '../../assets/card-content';

const CardContainer = () => {

    return (
        <div className='row'>
            {cardContent.map(card => {
                const { title, price, advantages } = card;
                return <Card
                    key={title}
                    title={title}
                    price={price}
                    advantages={advantages}
                />
            })}
        </div>
    )
}

export default CardContainer;