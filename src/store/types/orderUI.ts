
export interface OrderStepModel {
    id: number;
    title: string;
    isDone: boolean;
}

export interface OrderUIState {
    activeOrderCreatingStep: number;
    orderSteps: OrderStepModel[];
}

export enum OrderUIActionTypes{
    CHANGE_STEP = 'CHANGE_STEP',
}

interface ChangeactiveOrderCreatingStep {
    type: OrderUIActionTypes.CHANGE_STEP;
    payload: number;
}

export type OrderUIAction = ChangeactiveOrderCreatingStep;