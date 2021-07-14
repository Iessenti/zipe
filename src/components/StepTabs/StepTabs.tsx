import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';

import '../../assets/sass/stepTabs.sass'

import StepDone from 'assets/images/step-done.svg'

const iff = (condition: boolean, then: string, otherwise: boolean) => condition ? then : otherwise

const StepTabs = () => {

    const { orderSteps, activeOrderCreatingStep } = useSelector((state: RootState) => state.orderUI);

    return (
        <div className="step-tabs">
            {
                orderSteps && orderSteps.length && orderSteps.map(orderStep => (
                    <div 
                        className={`step-tabs--tab ${orderStep.isDone ? 'done' : iff( (activeOrderCreatingStep===orderStep.id), 'active', false )}`}
                        >
                        <div>
                            {
                                orderStep.isDone
                                &&
                                <div className='step-tabs--tab--num'><img src={StepDone} alt="check" /></div>
                                ||
                                <div className='step-tabs--tab--num'>{ orderStep.id + 1 }</div>
                            }
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