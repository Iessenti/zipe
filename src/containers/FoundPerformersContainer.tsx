import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { CardHeader } from 'components/CardHeader';
import { ReadyPerformerCard } from 'components/ReadyPerformerCard';
import { ORDER_SEARCH_PERFORMERS } from 'consts'
import {  LightBackArrow } from 'shared/icons'
import 'assets/sass/createOrder/readyPerformers.sass';

const FoundPerformersContainer = () => (
        <div className="ready-performers--wrapper" >
            <div className='back blue-span'>
                <LightBackArrow />
                Назад к результатам
            </div>
            <CardHeader
                title="Потенциальные исполнители"
                subTitle="Мы предложили им выполнить ваш заказ"
                showBox='0'
            />    
            <PerfectScrollbar className='cards-wrapper ps'>          
                {
                    ORDER_SEARCH_PERFORMERS.map( (elem) => ( <ReadyPerformerCard name={elem.name} title={elem.title} rate={elem.rate}/> ))
                }
                {
                    ORDER_SEARCH_PERFORMERS.map( (elem) => ( <ReadyPerformerCard name={elem.name} title={elem.title} rate={elem.rate}/> ))
                }
                {
                    ORDER_SEARCH_PERFORMERS.map( (elem) => ( <ReadyPerformerCard name={elem.name} title={elem.title} rate={elem.rate}/> ))
                }
                {
                    ORDER_SEARCH_PERFORMERS.map( (elem) => ( <ReadyPerformerCard name={elem.name} title={elem.title} rate={elem.rate}/> ))
                }
                {
                    ORDER_SEARCH_PERFORMERS.map( (elem) => ( <ReadyPerformerCard name={elem.name} title={elem.title} rate={elem.rate}/> ))
                }
                {
                    ORDER_SEARCH_PERFORMERS.map( (elem) => ( <ReadyPerformerCard name={elem.name} title={elem.title} rate={elem.rate}/> ))
                }
            </PerfectScrollbar>  
        </div>
)


export { FoundPerformersContainer }