import React from 'react';
import { useDispatch } from 'react-redux';
import {CellButtonNext} from 'shared/icons';
import { WalletActionTypes } from 'store/types/wallet';

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
    
    const changeStoryState = (value: boolean) => ({type: WalletActionTypes.TOGGLE_STORY_STATE, payload: value});

    const dispatch = useDispatch();

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
                        <div className='story-block' role='presentation' onClick={ () => {document.body.style.overflowY = 'hidden'; dispatch(changeStoryState(true))}}>
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