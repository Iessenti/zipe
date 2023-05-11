import React from 'react';

import { OrderTypeCard } from 'components/OrderTypeCard';

import { MAIN_PAGE_TYPES } from 'consts';

const MainPagePopularOrders = () => (
    <div className="main-page-popular">
        <div className='main-page-popular__header'>Популярные заказы</div>

        <div className='main-page-popular__content'>
            {
                MAIN_PAGE_TYPES.map(elem => (
                    <OrderTypeCard orderType={{...elem, isOrderCreate: false}}/>
                ))
            }
        </div>

    </div>
)

export { MainPagePopularOrders }