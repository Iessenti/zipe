import React from 'react';

import { RightLightArrowIcon } from 'shared/icons';

import { MainPageArticlesList } from './MainPageArticlesList';

const MainPageArticles = () => {

    console.log('asdf')

    return (
        <div className="main-page-articles">
            <div className='main-page-articles__header'>
                <span>Интересные статьи</span>
                <div className="watch-all-wrapper">
                    <span>Смотреть все</span> 
                    <RightLightArrowIcon/>
                </div>
            </div>
            <div className='main-page-articles__content'>
                <MainPageArticlesList/>
            </div>
        </div>
    )
}

export { MainPageArticles };