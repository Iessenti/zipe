import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from 'store/reducers';
import { OrderUIActionTypes } from 'store/types/orderUI';

import { CardHeader } from 'components/CardHeader';

import { ChooseOrderTypeTab } from 'components/CreateOrderComponents/ChooseOrderTypeTab';
import { ChooseOrderCategoryTab } from 'components/CreateOrderComponents/ChooseOrderCategoryTab';
import { OrderDescriptionTab } from 'components/CreateOrderComponents/OrderDescriptionTab';
import { OrderDetailsTab } from 'components/CreateOrderComponents/OrderDetailsTab';

import BackArrow from "assets/images/arrow-back.svg";

import 'assets/sass/createOrder/common.sass';

const OrderCreateContainer = () => {

    const activeStep = useSelector((state: RootState) => state.orderUI.activeOrderCreatingStep);

    const changeActiveStep = (value: number) => ({type: OrderUIActionTypes.CHANGE_STEP, payload: value })

    const dispatch = useDispatch();

    if (activeStep === 0) {
        return (
            <div className="order-create--card">
                <CardHeader
                    title="Создание заказа"
                    subTitle="Выберите тип заказа"
                    showBox='1'    
                />
                <ChooseOrderTypeTab/>
            </div>
        )
    }

    if (activeStep === 1) {
        return (
            <div className="order-create--card">
                <div
                    className="order-create--card__back"
                    onClick={ () => dispatch(changeActiveStep(0))}
                    role='presentation'
                >
                        <img src={BackArrow} alt="back" />
                    
                </div>
                <CardHeader
                    title="Создание заказа"
                    subTitle="Укажите нужную категорию в списке или воспользуйтесь поиском"
                    showBox='1'   
                />
                <ChooseOrderCategoryTab/>
            </div>
        )
    }

    if (activeStep === 2) {
        return (
            <div className="order-create--card">
                <button
                    type="button"
                    className="order-create--card__back"
                    onClick={ () => dispatch(changeActiveStep(1))}
                >
                        <img src={BackArrow} alt="back" />
                </button>
                <CardHeader
                    title="Создание заказа"
                    subTitle="Расскажите подробнее о вашей задаче"
                    showBox='1'    
                />
                <OrderDescriptionTab/>
            </div>
        )
    }

    return (
        <div className="order-create--card">
            <button
                type="button"
                className="order-create--card__back"
                onClick={ () => dispatch(changeActiveStep(2))}
            >
                <img src={BackArrow} alt="back" />
            </button>
            <CardHeader
                title="Создание заказа"
                subTitle="Укажите бюджет и сроки для выполнения"
                showBox='1'
            />
            <OrderDetailsTab/>
        </div>
    )
}

export { OrderCreateContainer }