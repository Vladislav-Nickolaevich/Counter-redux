import React, {ChangeEvent, memo} from 'react';

type InputType = {
    title: string
    onChange: (value: number) => void
    value: number
}

export const Input = memo((props: InputType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => props.onChange(+e.currentTarget.value)

    return (
        <span>
            <span>{props.title}</span>
            <input
                type='number'
                onChange={onChangeHandler}
                value={props.value}
            />
        </span>
    );
})

