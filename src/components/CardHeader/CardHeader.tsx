import React from 'react';

import TypeTitleIllustration from 'assets/images/create-order-type.svg';

type Props = {
    title: string;
    subTitle: string;
}

const CardHeader = ({ title, subTitle }: Props) => (
    <div className="order-tab-title">
        <div>
            <h2>{ title }</h2>
            <img src={TypeTitleIllustration} alt="box" />
        </div>
        <span>{ subTitle }</span>
    </div>
)

export { CardHeader };