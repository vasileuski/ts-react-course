import { isDisabled } from '@testing-library/user-event/dist/utils';
import React from 'react';
import style from './style.module.css'

interface IProps {
  content: string,
  isDisabled: boolean,
  onClick: () => void,
}

export const Button = (props: IProps) => {
  return (
    <button className={style.button} onClick={props.onClick} disabled={props.isDisabled}>{props.content}</button>
  )
}
