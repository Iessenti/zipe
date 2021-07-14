import React from 'react';
import { useRouteMatch } from 'react-router';
import { routes } from 'routes';

import { OrderCreateContainer } from 'containers/OrderCreateContainer';
import { OrderSearchContainer } from 'containers/OrderSearchContainer';

const CreateOrderPage = () => {

    const isOrderSearchPage = useRouteMatch(routes.orderSearch);

    if (isOrderSearchPage) {
        return (
            <div className="order-search">
                <OrderSearchContainer/>
            </div>
        )
    }
    
    return (
        <div className="order-create">
            <OrderCreateContainer/>
        </div>
    )
}

export { CreateOrderPage }