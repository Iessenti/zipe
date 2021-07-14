import React from 'react';

import { OrderTypeCard } from 'components/OrderTypeCard';

import { ORDER_CREATE_TYPES } from 'consts';

import 'assets/sass/createOrder/chooseOrderType.sass';

const ChooseOrderTypeTab = () => (
    <div className="order-type">
        {
            ORDER_CREATE_TYPES.map(item => <OrderTypeCard orderType={{...item, isOrderCreate: true}}/>)
        }
    </div>
)

export { ChooseOrderTypeTab };