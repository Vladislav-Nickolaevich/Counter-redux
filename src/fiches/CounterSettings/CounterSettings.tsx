import React, {useState} from 'react';
import {Input} from "../../components/Input";
import {useSelector} from "react-redux";
import {Button} from "../../components/Button";
import {
    setMinAndMaxValuesLocalStorageTC, showCounterSettingsAC
} from "../../state/counter-reducer";
import style from './CounterSettings.module.css'
import {maxValueSelector, minValueSelector} from "../../state/selectors";
import {useAppDispatch} from "../../state/store";


export const CounterSettings = () => {
    const dispatch = useAppDispatch()
    const minValue = useSelector(minValueSelector)
    const maxValue = useSelector(maxValueSelector)

    const [min, setMin] = useState<number>(minValue)
    const [max, setMax] = useState<number>(maxValue)

    const setOnClick = () => {
        dispatch(setMinAndMaxValuesLocalStorageTC(min, max))
        dispatch(showCounterSettingsAC())
    }

    const onChangeMaxHandler = (e:number) => setMax(e)
    const onChangeMinHandler = (e:number) => setMin(e)

    const isDisabledSet = min >= max


    return (
        <div>
            <div className={style.valueCounterBoxStyle}>
                <Input value={max} onChange={onChangeMaxHandler} title='Max: '/>
                <Input value={min} onChange={onChangeMinHandler} title='Min: '/>
            </div>
            <div className={style.buttonSetStyle}>
                <Button title='set' onClickHandler={setOnClick} disabled={isDisabledSet}/>
            </div>
        </div>
    );
};

