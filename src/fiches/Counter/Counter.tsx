import React, {useCallback, useEffect} from 'react';
import style from "./Counter.module.css";
import {useSelector} from "react-redux";
import {Button} from "../../components/Button";
import {
    showCounterSettingsAC,
    incBtnAC,
    resetBtnAC,
    getMinAndMaxValuesLocalStorageTC} from "../../state/counter-reducer";
import {currentValueSelector, maxValueSelector, minValueSelector} from "../../state/selectors";
import {useAppDispatch} from "../../state/store";

export const Counter = () => {
    const dispatch = useAppDispatch()
    const currentValue = useSelector(currentValueSelector)
    const maxValue = useSelector(maxValueSelector)
    const minValue = useSelector(minValueSelector)


    const incBtn = useCallback(() => {
        currentValue < maxValue && dispatch(incBtnAC())
    }, [dispatch])

    const resetBtn = useCallback(() => dispatch(resetBtnAC()), [dispatch])
    const setBtn = useCallback(() => dispatch(showCounterSettingsAC()), [dispatch])

    const maxValueStyle = currentValue === maxValue ? {color: 'red'} : {color: 'black'}

    const isDisabledInc = currentValue === maxValue
    const isDisabledRest = currentValue === minValue



    useEffect(() => {
        dispatch(getMinAndMaxValuesLocalStorageTC())
    }, [])

    return (
        <div>
            <div className={style.currentValueStyle} style={maxValueStyle}>
                {currentValue}
            </div>
            <div className={style.buttonsWrapperStyle}>
                <Button title='inc' onClickHandler={incBtn} disabled={isDisabledInc}/>
                <Button title='reset' onClickHandler={resetBtn} disabled={isDisabledRest}/>
                <Button title='set' onClickHandler={setBtn} disabled={false}/>
            </div>
        </div>
    );
};