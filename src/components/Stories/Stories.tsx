import React from 'react';
import {CellButtonNext} from 'shared/icons';
// import Story from 'assets/images/Story.png';

const stories = [
    {
        title: 'Заказываем первую работу'
    },
    {
        title: 'Топ мест для отдыха после работы'
    },
    {
        title: 'Повышенный кешбэк'
    },
    {
        title: 'Дизайн-процесс как смысл жизни'
    }
]

const Stories = () => {
    console.log(1)

    return (
        <div className='stories'>
            
            <div className='header'>
                <span>Для Вас</span>
                <div className='arrows'>
                    <div className='back'><CellButtonNext iconProperty='#000'/></div>
                    <div><CellButtonNext iconProperty='#000'/></div>
                </div>
            </div>

            <div className='stories-line'>
                {
                    stories.map( elem => 
                        <div className='story-block' role='presentation' onClick={ () => console.log(1)}>
                            <div className='photo-box'>
                                <div className='title'>{elem.title}</div> 
                                <div className='overlay' />
                            </div>
                        </div>    
                    )
                }
            </div>

        </div>
    )
}

export {Stories}