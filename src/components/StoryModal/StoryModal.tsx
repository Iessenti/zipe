import React, { useEffect, useState } from 'react';
//  import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { RootState } from 'store/reducers';
import { WalletActionTypes } from 'store/types/wallet';
import 'assets/sass/storyModal.sass'
import { CloseStoryIcon, CellButtonNext } from 'shared/icons'

import Story1 from 'assets/images/Story1.png';
import Story2 from 'assets/images/Story2.png';
import Rocket from 'assets/images/rocket.png';
import Avocade from 'assets/images/Avocade.png';

const StoriesData = [
    {
        title: 'Как правильно заказать работу у художника через интернет?',
        photo: Story1,
        text: 'Вы скажете: «Какой банальный совет!» Ах если бы. Я встречаю десятки талантливых людей, которые боятся делиться, не рассказывают о себе, своем творчестве, страдают из-за нереализованных возможностей и негодуют, почему у других есть заказы, а у них нет.',
        buttons: [
            {
                title: 'Создать новый заказ',
                icon: Rocket
            }
        ]
    },
    {
        title: 'Кто играл главную роль в фильме Дж. Кэмерона “Титаник”',
        photo: Story2,
        text: '“Титаник” — британский трансатлантический пароход, второй лайнер класса «Олимпик». Строился в Белфасте на верфи «Harland & Wolff» с 1909 по 1912 год по заказу судоходной компании «White Star Line». На момент ввода в эксплуатацию являлся самым большим судном в мире. В ночь с 14 на 15 апреля 1912 года во время первого рейса потерпел крушение в северной Атлантике, столкнувшись с айсбергом.',
        buttons: [
            {
                title: '“Авокадо”',
                icon: Avocade
            },
            {
                title: '“Авокадо”',
                icon: Avocade
            },
            {
                title: '“Авокадо”',
                icon: Avocade
            },
        ]
    }
]

const iff = (condition: boolean, then: object, otherwise: object) => condition ? then : otherwise

const widthCounter = `${(460 / StoriesData.length).toString()}px`

const StoryModal = () => {

    const storyInstance = useSelector((state: RootState) => state.wallet);
    const changeStoryState = (value: boolean) => ({type: WalletActionTypes.TOGGLE_STORY_STATE, payload: value});
    let x:number = 0 // я не понимаю, почему storyNum корректно не меняется, поэтому мне пришлось ввести новую переменную
    const dispatch = useDispatch();
    const [storyNum, setStoryNum] = useState<number>(0)
    const [runner, setRunner] = useState({})

    const toggleStory = (act: string) => {   
        if (x + 1 === StoriesData.length) {
            x = 0
            dispatch(changeStoryState(false));
            document.body.style.overflowY = 'scroll';          
        } else {

            if (act === '+') {
                x += 1
            } else if (x!==0){
                x -= 1
            } 
            
            setStoryNum(x)
        }
    }

    useEffect( () => {

            setRunner({backgroundPosition: 'left', width: widthCounter, transition: '10s ease-out'})
            
            const interval = window.setInterval(() => {  
                toggleStory('+')
            }, 10000)

            return () => {
                clearInterval(interval)
            }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <CSSTransition
            in={storyInstance && storyInstance.isStoryOpened || false}
            timeout={2000}
            classNames='story-transition'
            unmountOnExit
        >
            <div className='story-container'>
                
                <div 
                    className='close-icon'
                    role='presentation'
                    onClick={ () => {
                        dispatch(changeStoryState(false))
                        document.body.style.overflowY = 'scroll'
                    }}
                >
                    <CloseStoryIcon/>
                </div>
                
                <div className='arrow back'
                    role='presentation'
                    onClick={ () => toggleStory('-')}
                >
                    <CellButtonNext iconProperty='#000'/>
                </div>

                <div className='arrow next'
                     role='presentation'
                     onClick={ () => toggleStory('+')}               
                >
                    <CellButtonNext iconProperty='#000'/>
                </div>

                <div className='story'>
                    
                    <div className='photo-overlay'/>
                    <img src={StoriesData[storyNum].photo} alt='story' /> 
                
                    <div className='story-body'>

                        <div className='counter-bar'>
                            {
                                StoriesData.map( (elem, index) => 
                                    <div 
                                        className='counter' 
                                        style={
                                            index===storyNum 
                                            ? 
                                            runner
                                            : 
                                            iff( (index < storyNum), {backgroundPosition: 'left', width: widthCounter}, {width: widthCounter} )   
                                        }
                                        key={elem.title.length}
                                    />
                                )
                            }
                        </div>

                        <div>
                            <div className='title'>{StoriesData[storyNum].title}</div>
                                <div className='description'>{StoriesData[storyNum].text}</div>
                            </div>
                
                            <div className='buttons-container'>
                                {
                                    StoriesData[storyNum].buttons.map( el => 
                                        <div className='button'>
                                            <span>{el.title}</span>
                                            <img src={el.icon} alt='icon'/>
                                        </div>    
                                    )
                                }
                            </div>
                        </div>  
                    </div>              
                
            </div>
        </CSSTransition>
    )
}

export { StoryModal }