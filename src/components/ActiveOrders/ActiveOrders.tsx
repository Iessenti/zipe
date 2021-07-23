import React, {useState} from 'react';
import { Animation } from 'rsuite';
import SmallIll from 'assets/images/small-illustration.png';
import { MiniWhitePlus, RollingCurve, ProgressAngle} from '../../shared/icons';

const {Collapse}= Animation;

const orders = [
    {
        title: 'Дизайн лендинга',
        date: 'С 28 июня по 30 июля',
        cash: '99 789'
    },
    {
        title: 'Дизайн лендинга',
        date: 'С 28 июня по 30 июля',
        cash: '99 789'
    }
]

const iff2 = (condition: boolean, then:  JSX.Element, otherwise: JSX.Element) => condition ? then : otherwise

const ActiveOrders = () => {

    const [opened, setOpened] = useState(false);

    const toggleOpen = () => {
        if (opened) {
            setOpened(false)
        } else {
            setOpened(true)
        }

    }

    return (
        <div className='active-orders'>
            <div className='finance-header'>
                <div className='info'>
                    <span className='title'>Активные заказы</span>
                    {
                        opened
                        ?
                        false
                        :
                        iff2(
                            (orders.length > 1),
                            <span>{orders.length} заказа в работе</span>,
                            <span>Заказов пока нет</span>

                        )

                    }
                </div>
                <div 
                    className={`icon ${opened ? '' : 'rotated' }`} 
                    onClick={ () => toggleOpen()} 
                    role='presentation'
                >
                    <RollingCurve />
                </div>
            </div>

            <Collapse
                    in={opened}
                    unmountOnExit
                >
                    {(props: any, ref: any) => <div ref={ref} {...props} className='main'>

                        {
                            (orders.length > 1)
                            ?
                            orders.map( (elem) => (
                                <div className='row'>         
                                    <div className='bill-icon'><ProgressAngle/><img src={SmallIll} alt='small'/></div>
                                    <div className='bill-info'>
                                        <span className='bill-title'>{elem.title}</span>
                                        <span className='bill-desc'>{elem.date}</span>
                                    </div>
                                    <div className='bill-cash'><span>{elem.cash} ₽</span></div>
                                </div>
                            ))
                            :
                            <div className='empty-orders'>
                                <div className='image'/>
                                <span>На данный момент у вас нет активных заказов</span>
                            </div>
                        }


                    </div>}
            </Collapse>  

            <button type='button'>
                <MiniWhitePlus />
                <span>Создать новый заказ</span>
            </button>

        </div>  
    )

}

export {ActiveOrders}