import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/reducers';

import { OrderUIActionTypes } from 'store/types/orderUI';

import '../../assets/sass/stepTabs.sass'

import StepDone from 'assets/images/step-done.svg'

const iff = (condition: boolean, then: string, otherwise: boolean) => condition ? then : otherwise
const iff2 = (condition: boolean, then:  JSX.Element, otherwise: JSX.Element) => condition ? then : otherwise

const StepTabs = () => {

    const { orderSteps, activeOrderCreatingStep } = useSelector((state: RootState) => state.orderUI);

    const changeActiveStep = (value: number) => ({type: OrderUIActionTypes.CHANGE_STEP, payload: value })

    const dispatch = useDispatch();

    return (
        <div className="step-tabs">
            {
                orderSteps && orderSteps.length && orderSteps.map(orderStep => (
                    <div 
                        className={`step-tabs--tab ${(activeOrderCreatingStep===orderStep.id) ? 'active' : iff(orderStep.isDone , 'done', false )}`}
                        onClick={ () => {
                            if (orderStep.id <= activeOrderCreatingStep) {
                                dispatch(changeActiveStep(orderStep.id)) 
                            }}}
                        role='presentation'
                        >
                        <div>
                            
                                <div className='step-tabs--tab--num'>
                                {
                                    
                                    activeOrderCreatingStep===orderStep.id
                                    ?
                                    <span>{orderStep.id + 1}</span>
                                    : 
                                    iff2(orderStep.isDone , <img src={StepDone} alt="check" /> , <span>{orderStep.id + 1}</span>)
                                }
                                </div>
                            
                        </div>
                        <span className='step-tabs--tab--title'>{ orderStep.title }</span>
                        <div className='step-tabs--tab--triangle'>o</div>
                    </div>
                ))
            }
        </div>
    )
}

export { StepTabs }