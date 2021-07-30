import React, { useState } from 'react';

import { Animation } from 'rsuite';
import {SearchIcon, CellButtonNext, MiniCalendarIcon, ShortParallelLines, BlockedWalletIcon, PlusWalletIcon, MinusWalletIcon, BanCircleIcon, SmallBlueListIcon, SmallBLuePrinterIcon, SmallBlueConvertIcon } from 'shared/icons'

import { TRANSACTIONS } from 'consts';


const { Collapse } = Animation;

interface Transaction {
    id: string;
    title: string;
    desc: string;
    type: string;
    addDesc: string;
    cash: string;
    time: string;
    date: string;
    textDate: string;
    number: string;
}

const WalletOperations = () => {

    const [openedTransaction, setOpenedTransaction] = useState<string>('')

    const toggleOpened = (id: string) => {
        if (openedTransaction === id) {
            setOpenedTransaction('')
        } else {
            setOpenedTransaction(id)
        }
    }

    const switchType = (elem: Transaction) => {
        switch (elem.type) {
            case 'reserving':
                return (                          
                    <div className='transaction' role='presentation' onClick={() => toggleOpened(elem.id)}>
                        <div className='main'>
                            <div className='icon' style={{background: '#F6F6FA'}}><BlockedWalletIcon/></div>
                            <div className='info'>
                                <span className='title'>{elem.title}</span>
                                <span className='desc'>{elem.desc}<span>{elem.addDesc}</span></span>
                            </div>
                            <div className='cash'>
                                <span className='value' style={{color: '#9E9EB0'}}>{elem.cash} ₽</span>
                                <span className='date'>{elem.textDate} в {elem.time}</span>
                            </div>
                        </div>
                        <Collapse in={(openedTransaction === elem.id)} unmountOnExit>
                                {(props: any, ref: any) => <div ref={ref} {...props} className='additional-data'>
                                        <div className='main-block'>
                                            <div className='data'>
                                                <span className='title'>Подробнее о платеже</span>
                                                <div className='row'>
                                                    <span className='title'>Сумма платежа</span>
                                                    <div className='dashed'/>
                                                    <span className='value'>{elem.cash}</span>
                                                </div>
                                                <div className='row'>
                                                    <span className='title'>Дата</span>
                                                    <div className='dashed'/>
                                                    <span className='value'>{elem.cash}</span>
                                                </div>
                                                <div className='row'>
                                                    <span className='title'>Номер квитанции</span>
                                                    <div className='dashed'/>
                                                    <span className='value'>{elem.number}</span>
                                                </div>
                                            </div>
                                            <div className='buttons-wrapper'>
                                                <button type='button'><SmallBlueListIcon/>Открыть квитанцию</button>
                                                <button type='button' className='margin'><SmallBLuePrinterIcon/>Печать квитанции</button>
                                                <button type='button'><SmallBlueConvertIcon />Отправить на почту</button>
                                            </div>
                                        </div>
                                        <div className='line'/>
                                    </div>
                                }
                        </Collapse>
                    </div>  
                )
            
            case 'plus':
                return (
                    <div className='transaction'>
                        <div className='main'>
                            <div className='icon' style={{background: '#E6EBFF'}}><PlusWalletIcon/></div>
                            <div className='info'>
                                <span className='title'>{elem.title}</span>
                                <span className='desc'>{elem.desc}<span>{elem.addDesc}</span></span>
                            </div>
                            <div className='cash'>
                                <span className='value' style={{color: '#4CC24C'}}>+ {elem.cash} ₽</span>
                                <span className='date'>{elem.textDate} в {elem.time}</span>
                            </div>
                        </div>
                    </div>  
                )
            
            case 'minus':
                return (
                    <div className='transaction'>
                        <div className='main'>
                            <div className='icon' style={{background: '#E6EBFF'}}><MinusWalletIcon/></div>
                            <div className='info'>
                                <span className='title'>{elem.title}</span>
                                <span className='desc'>{elem.desc}<span>{elem.addDesc}</span></span>
                            </div>
                            <div className='cash'>
                                <span className='value' style={{color: '#13131C'}}>- {elem.cash} ₽</span>
                                <span className='date'>{elem.textDate} в {elem.time}</span>
                            </div>
                        </div>
                    </div>                      
                )
            case 'blocked':
                return (
                    <div className='transaction'>
                        <div className='main'>
                            <div className='icon' style={{background: '#FFE6E6'}}><BanCircleIcon/></div>
                            <div className='info'>
                                <span className='title'>{elem.title}</span>
                                <span className='desc'>{elem.desc}<span>{elem.addDesc}</span></span>
                            </div>
                            <div className='cash'>
                                <span className='value' style={{color: '#FF3959'}}>- {elem.cash} ₽</span>
                                <span className='date'>{elem.textDate} в {elem.time}</span>
                            </div>
                        </div>
                    </div>    
                )
            default:
                return <span>lol</span>
        }
    }


    return (
        <div className='wallet-operations-wrapper'>
            
            <div className='header'>Мои операции</div>

            <div className='calendar-input-wrapper'>
                <div className='arrows'>
                    <div className='back'><CellButtonNext iconProperty='#000'/></div>
                    <div className='calendar'><div><MiniCalendarIcon/></div>Июль</div>
                    <div><CellButtonNext iconProperty='#000'/></div>
                </div>
                <div className='search'><input type='text' placeholder='Найдите любые операции и события'/><SearchIcon /></div>
            </div>

            <div className='filter-panel'>
                <div className='categories'>
                    <span style={{color: '#13131C'}}>Все</span>
                    <span >Зачисления</span>
                    <span >Расходы</span>
                    <span >Прочее</span>
                </div>
                <div className='filter'>
                    <div>Сумма<ShortParallelLines/></div>
                    <div>Дата<ShortParallelLines/></div>
                </div>
            </div>

            {
                TRANSACTIONS.map( el => 
                    <div className='date-transaction-wrapper'>
                        <span>{el.date}</span>
                        {
                            el.body.map( elem => 
                                switchType({...elem})
                                
                            )
                        }
                    </div>
                )
            }

        </div>
    )
}

export {WalletOperations}