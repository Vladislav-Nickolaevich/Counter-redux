import React from 'react';
import {useSelector} from "react-redux";
import {CounterSettings} from "./CounterSettings/CounterSettings";
import {Counter} from "./Counter/Counter";
import {isShowCounterSettingsSelector} from "../state/selectors";


export const CounterWrapper = () => {
    const isShowCounterSettings = useSelector(isShowCounterSettingsSelector)
    return (
        isShowCounterSettings ?
            <CounterSettings/>:
            <Counter/>
    );
};
