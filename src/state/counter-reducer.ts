const SHOW_COUNTER_SETTINGS = 'SHOW-COUNTER-SETTINGS'
const INC_BTN = 'INC_BTN'
const RESET_BTN = 'RESET-BTN'
const SET_MIN_AND_MAX_VALUES = 'SET-MIN-AND-MAX-VALUES'

type ActionType = showCounterSettingsACType | IncBtnACType | ResetBtnACType | SetMinAndMaxValuesACType

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

export const counterReducer = (state:initialStateType= initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case INC_BTN :
            return {
                ...state,
                currentValue: state.currentValue + 1,
            }
        case SHOW_COUNTER_SETTINGS:
            return {
                ...state,
                isShowCounterSettings: !state.isShowCounterSettings,
            }
        case SET_MIN_AND_MAX_VALUES:
            return {
                ...state,
                minValue: action.minValue,
                maxValue: action.maxValue,
                currentValue: action.minValue
            }
        case RESET_BTN:
            return{
                ...state,
                currentValue: state.minValue
            }
        default:
            return state
    }
}

type IncBtnACType = ReturnType<typeof incBtnAC>
export const incBtnAC = () => ({type: INC_BTN} as const)

type ResetBtnACType = ReturnType<typeof resetBtnAC>
export const resetBtnAC = () => ({type: RESET_BTN} as const)

type showCounterSettingsACType = ReturnType<typeof showCounterSettingsAC>
export const showCounterSettingsAC = () => ({type: SHOW_COUNTER_SETTINGS} as const) /// подумать над названием

type SetMinAndMaxValuesACType = ReturnType<typeof setMinAndMaxValuesAC>
export const setMinAndMaxValuesAC = ( minValue: number, maxValue: number) => (
    {type: SET_MIN_AND_MAX_VALUES, minValue, maxValue } as const
)

