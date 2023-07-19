import React, {memo} from 'react';


type ButtonType = {
    title: string
    disabled: boolean
    onClickHandler: () => void
}
export const Button = memo( (props:ButtonType) => {
    const onClickHandler = () => props.onClickHandler()

    return (
        <button onClick={onClickHandler} disabled={props.disabled}>{props.title}</button>
    );
})

