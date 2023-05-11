import React from 'react';

import { Ripple } from 'components/Ripple';

import { MiniClockIcon, MiniCalendarIcon } from 'shared/icons';

import { MAIN_PAGE_ARTICLES } from 'consts';
import { generateRandomNumber } from 'shared/helpers';

import ArticleIllustration from 'assets/images/article1.png';

const MainPageArticlesList = () => (
    <>
        {
            MAIN_PAGE_ARTICLES.map(elem => (
                <div className="main-page-articles__content__article" key={generateRandomNumber()}>
                    <Ripple />
                    <img src={ArticleIllustration} alt="article"/>
                    <p>{elem.title}</p>
                    <div className="main-page-articles__content__article__info">
                        <MiniClockIcon />
                        <span>{elem.read}</span>
                        <MiniCalendarIcon/>
                        <span>{elem.date}</span>
                    </div>
                </div>
            ))
        }
    </>
)

export { MainPageArticlesList }