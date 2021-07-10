import React, { useState } from 'react';
import { SearchIcon } from '../../shared/icons';
import RocketImage from '../../assets/images/rocket.png'
import { Ripple } from '../../shared/RippleButton'

const LABELS = [
    {text: 'дизайн сайта'},
    {text: 'вёрстка'},
    {text: 'монтаж видео'},
    {text: '+ более 500 услуг'},
]

export const MainPageSearch = () => {
    const [inputFocused, setInputFocused] = useState(false);
    return (
        <div className="main-page-search">
            <span className="main-page-search__title-text">Найдём проверенных исполнителей<br/>
            для ваших задач за <a href="#">15 мин</a></span>
            <form 
                className={`main-page-search--form ${inputFocused ? 'focused' : ''}`}
                onSubmit={(e) => e.preventDefault()}
            >
                <div className='main-page-search--form__search-icon'><SearchIcon /></div>
                <input 
                    type="text" 
                    value=""
                    placeholder="Ищите среди тысячи услуг и исполнителей"
                    className="main-page-search--form__input"
                    onFocus={() => setInputFocused(true)}
                    onBlur={() => setInputFocused(false)}
                    onChange={()=>{}}
                />
                <button className='main-page-search--form__make-order-btn'>
                    <Ripple />
                    Создать заказ
                    <img src={RocketImage} alt=""/>
                </button>
            </form>

            <div className='main-page-search__labels-container'>
                {
                    LABELS.map( elem => {
                        return (
                            <div key='elem'>
                                {elem.text}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}