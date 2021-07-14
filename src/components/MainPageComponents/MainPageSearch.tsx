import React, { useState, useContext } from 'react';
import { Animation } from 'rsuite';

import { Ripple } from 'components/Ripple';
import { SearchIcon } from 'shared/icons';
import RocketImage from 'assets/images/rocket.png';
import { generateRandomNumber } from 'shared/helpers';
import { OverlayContext } from 'shared/Context';

import { MainPageResultSearch } from './MainPageResultSearch';

const { Collapse } = Animation;

const LABELS = [
    {text: 'дизайн сайта'},
    {text: 'вёрстка'},
    {text: 'монтаж видео'},
    {text: '+ более 500 услуг'},
]

const MainPageSearch = () => {

    const [inputFocused, setInputFocused] = useState(false);

    const {isOverlay, setIsOverlay} = useContext(OverlayContext);
    
    const handleSearchInput = (overflowVal: string) => {
        setInputFocused(!isOverlay);
        setIsOverlay(!isOverlay); 
        document.body.style.overflowY = overflowVal;
    }

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
                    onFocus={() => handleSearchInput("hidden")}
                    onBlur={() => handleSearchInput("scroll")}
                    onChange={()=>{}}
                />
                <div className='main-page-search--form__make-order-btn'>
                    <Ripple />
                    Создать заказ
                    <img src={RocketImage} alt=""/>
                </div>
            </form>

            <Collapse
                in={inputFocused}
                unmountOnExit
            >
                {(props: any, ref: any) => <MainPageResultSearch {...props} ref={ref}/>}
            </Collapse>                       
                

            <div className='main-page-search__labels-container'>
                {
                    LABELS.map(elem => (
                        <div key={generateRandomNumber()}>  
                            {elem.text}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export { MainPageSearch }