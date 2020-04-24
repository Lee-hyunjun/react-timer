import React from 'react'
import { TextField, InputAdornment, Icon, Button } from '@material-ui/core'
import clsx from 'clsx'

import './input.scss'

export default function Input({ className: propClassName, color = 'primary', theme, adornment, InputProps: propInputProps, children, ...props }) {
  const isEmpty = props.value && props.value.trim().length < 1
  const className = clsx('ui_input', theme, isEmpty && 'empty', propClassName)
  let InputProps = {}

  if (adornment) {
    Object.keys(adornment).forEach(key => {
      const { type, body, icon, text, onClick } = adornment[key]

      InputProps[`${key}Adornment`] = (
        <InputAdornment position={key}>
          {type === 'icon' && <Icon>{icon}</Icon>}

          {type === 'button' && (
            <Button variant="contained" color={color} startIcon={<Icon>{icon}</Icon>} onClick={onClick}>{text}</Button>
          )}

          {type === 'custom' && body}
        </InputAdornment>
      )
    })
  }

  InputProps = { ...InputProps, ...propInputProps }

  return (
    <TextField
      className={className}
      variant="outlined"
      color={color}
      InputProps={InputProps}
      {...props}
    >
      {children}
    </TextField>
  )
}
