import React from 'react';

import { CardHeader } from 'components/CardHeader';
import { ORDER_SEARCH_PERFORMERS } from 'consts'
import { PerformerCard } from '../components/PerformerCard/PerformerCard';
import 'assets/sass/createOrder/orderSearch.sass';

const OrderSearchContainer = () => (
        <div className="order-search--wrapper" >
            <CardHeader
                title="4 исполнителя откликнулись на заказ"
                subTitle="Ожидайте новых откликов или завершите поиск"
                showBox='0'
            />                
            <div className='order-search--wrapper--cards-wrapper'>
                {
                    ORDER_SEARCH_PERFORMERS.map( (elem) => ( <PerformerCard name={elem.name} title={elem.title} rate={elem.rate} projects={elem.projects} disputes={elem.disputes}  /> ))
                }
            </div>
        </div>
)


export { OrderSearchContainer }