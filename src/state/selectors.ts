import {AppRootType} from "./store";

export const isShowCounterSettingsSelector = (state: AppRootType) => state.counter.isShowCounterSettings
export const minValueSelector = (state: AppRootType) => state.counter.minValue
export const maxValueSelector = (state: AppRootType) => state.counter.maxValue
export const currentValueSelector = (state: AppRootType) => state.counter.currentValue