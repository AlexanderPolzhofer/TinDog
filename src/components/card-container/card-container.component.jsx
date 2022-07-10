import React from 'react';
import Card from '../card-component/card.component';

const CardContent = [
    {
        title: 'Chihuahua',
        price: 'Free',
        advantages: [
            '5 Matches Per Day',
            '10 Messages Per Day',
            'Unlimited App Usage'
        ]
    },
    {
        title: 'Labrador',
        price: '$49 / mo',
        advantages: [
            'Unlimited Matches',
            'Unlimited Messages',
            'Unlimited App Usage'
        ]
    },
    {
        title: 'Mastiff',
        price: '$99 / mo',
        advantages: [
            'Pirority Listing',
            'Unlimited Matches',
            'Unlimited Messages',
            'Unlimited App Usage'
        ]
    }
]

const CardContainer = () => {

    return (
        <div className='row'>
            {CardContent.map(card => {
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