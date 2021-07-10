import React from 'react';

import { Ripple } from 'components/Ripple';

import { MAIN_PAGE_TYPES } from 'consts';
import { generateRandomNumber } from 'shared/helpers';

import TypeIllustration from 'assets/images/Illustration.png'

const MainPagePopularOrders = () => (
    <div className="main-page-popular">
        <div className='main-page-popular__header'>Популярные заказы</div>

        <div className='main-page-popular__content'>
            {
                MAIN_PAGE_TYPES.map(elem => (
                    <div 
                        key={generateRandomNumber()}
                        className="main-page-popular__content__element" 
                        style={{
                            backgroundColor: elem.color,
                            width: `${elem.width}px`,
                        }}  
                    >
                            <div className="main-page-popular__content__element__ripple" ><Ripple /></div>  
                            <span className="main-page-popular__content__element__title" style={{color: elem.textColor}}>{ elem.title }</span><br/>
                            <span className="main-page-popular__content__element__type" style={{color: elem.smallTextColor}}>{ elem.type }</span>
                            <div 
                                className="main-page-popular__content__element__img"
                                style={{
                                    top: elem.top,
                                    right: elem.right,
                                    height: elem.heightImage,
                                    width: elem.widthImage
                                }}
                            >
                            
                                <img src={TypeIllustration} alt="order-illustration" 
                                    style={{                    
                                        height: elem.heightImage,
                                        width: elem.widthImage
                                    }}
                                />
                            </div>
                    </div>
                ))
            }
        </div>

    </div>
)

export { MainPagePopularOrders }

// return (
//     <MainPageType title={elem.title} type={elem.type} color={elem.color} image={ TypeImage } width={elem.width} textColor={elem.textColor} top={elem.top} right={elem.right} heightImage={elem.heightImage} widthImage={elem.widthImage} smallTextColor={elem.smallTextColor}/>
// )