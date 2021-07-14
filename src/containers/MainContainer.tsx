import React from 'react';

import { MainPageSearch, MainPagePopularOrders, MainPageArticles, MainPageBanner, MainPageActiveOrders } from 'components/MainPageComponents';


const MainContainer = () => (
    <>
        <MainPageActiveOrders/>
        <MainPageSearch/>
        <MainPagePopularOrders/>
        <MainPageArticles/>
        <MainPageBanner/>
    </>
)

export { MainContainer };