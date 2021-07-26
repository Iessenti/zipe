import React from 'react';

import TypeTitleIllustration from 'assets/images/create-order-type.svg';

type Props = {
    title: string;
    subTitle: string;
    showBox: string;
}

const CardHeader = ({ title, subTitle, showBox }: Props) => (
    <div className="order-tab-title">
        <div>
            <span className='title'>{ title }</span>
            {
                showBox === '1'
                &&
                <img src={TypeTitleIllustration} alt="box" />
            }
        </div>
        <span>{ subTitle }</span>
    </div>
)

export { CardHeader };