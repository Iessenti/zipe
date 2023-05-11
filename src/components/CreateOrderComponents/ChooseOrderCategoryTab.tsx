import React, {useState} from 'react';

import 'assets/sass/createOrder/chooseOrderCategory.sass';

import { ORDER_CREATE_CATEGORIES } from 'consts';
import { SearchIcon, InputCross } from 'shared/icons';

import { useDispatch } from 'react-redux';
import { OrderUIActionTypes } from 'store/types/orderUI';

const ChooseOrderCategoryTab = () => {

    const [inputText, setInputText] = useState('')

    const changeActiveStep = (value: number) => ({type: OrderUIActionTypes.CHANGE_STEP, payload: value })

    const dispatch = useDispatch();

    return (
        <div className="order-category">

            <div className="order-category--form">
                <input 
                    type='text' 
                    className="order-category--form--input"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder='Начните вводить название категории'
                />
                <div className="order-category--form--icon" onClick={ () => setInputText('')} role='presentation'>
                    {
                        inputText.length
                        ?
                        <InputCross/>
                        :
                        <SearchIcon/>
                    }
                    
                </div>
            </div>
            
            {
                !inputText.length 
                ?
                    <div className="order-category--all">
                        {
                            ORDER_CREATE_CATEGORIES.map( item => 
                                    <div className="order-category--all--card">
                                        <span className="order-category--all--card--title">{item.title}</span>
                                        <div className="order-category--all--card--column">
                                            {
                                                item.categories.map( elem => <div 
                                                    className="category-label" 
                                                    onClick={ () => dispatch(changeActiveStep(2))}
                                                    role='presentation'
                                                >
                                                    {elem}
                                                </div> ) 
                                            }
                                        </div>
                                    </div>
                            )
                        }
                    </div>
                :
                    <div className="order-category--answers-wrapper">

                        <span className="order-category--answers-wrapper--title">Результаты поиска</span>

                        <div  className='order-category--answers-wrapper--answers'>
                            {
                                ORDER_CREATE_CATEGORIES.map( item =>           
                                    item.categories.map( elem => 
                                        elem.toLowerCase().includes(inputText.toLowerCase()) 
                                        ? 
                                        <div className="category-label">{elem}</div> 
                                        : 
                                        null
                                    )         
                                )
                            }
                        </div>
                    </div>
            }



        </div>
)}

export { ChooseOrderCategoryTab };