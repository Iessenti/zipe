import React, { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'

import { CurveIcon } from 'shared/icons';

import { MAINPAGE_ANSWERS_DATA } from 'consts';
import { generateRandomNumber } from 'shared/helpers';

import TypeIllustration from '../../assets/images/Illustration-mini.png'

const MainPageResultSearch = React.forwardRef(({ ...props}, ref: any) => {

    const [hovered, setHovered] = useState({ type: 'default', index: 300});
        
    return (
        
        <div className='main-page-search__input-answers'>
            <PerfectScrollbar className='scrollbar-container ps' ref={ref}  {...props}>
            {
                MAINPAGE_ANSWERS_DATA.map((elem, index) => (
                    <div 
                        className='main-page-search__input-answers__element'
                        onMouseEnter={() => {
                            setHovered({type: 'hovered', index })
                        }}
                        onMouseLeave={() => {
                            setHovered({type: 'default', index: 120 })
                        }}
                        key={generateRandomNumber()}
                    >
                        <div className='main-page-search__input-answers__element__img'><img src={TypeIllustration} alt="result-search"/></div>
                        <div className='main-page-search__input-answers__element__info'>
                            <div>
                                <span className='title'>{elem.title}</span>
                                <span className='type'>{elem.type}</span>
                            </div>
                            <CurveIcon 
                                iconProperty={
                                    index === hovered.index
                                    ?
                                    hovered.type 
                                    :
                                    ''
                                }
                            />
                        </div>
                    </div>
                ))
            }
            </PerfectScrollbar >
        </div>
    )
})

export { MainPageResultSearch }