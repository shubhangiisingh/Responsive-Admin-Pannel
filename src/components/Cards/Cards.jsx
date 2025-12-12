import React from 'react'
import './Cards.css'
import  Card  from '../Card/Card'
import { cardsData } from '../../Data/Data'
const Cards = () => {
    return (
        <div className='Cards'>
            {cardsData.map((card, id) => {
               return (
                <div className='ParentContainer'>
                 <Card
                 title={card.title}
                 color={card.color}
                 barValue={card.barValue}
                 value={card.value}
                 png={card.png}
                 series={card.series}
                 />                 
              </div>      
               )
            })}
        </div>
    )       
}

export default Cards