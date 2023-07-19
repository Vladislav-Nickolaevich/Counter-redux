
export type initialStateType = {
    minValue: number
    maxValue: number
    currentValue: number
    isShowCounterSettings: boolean
}
const initialState:initialStateType = {
    minValue: 1,
    maxValue: 5,
    currentValue: 1,
    isShowCounterSettings: false,
}

export const counterReducer = (state:initialStateType= initialState, action: any): initialStateType => {
    switch (action.type) {

        default:
            return state
    }
}

