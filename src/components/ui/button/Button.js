import React from 'react'
import { Button as MButton } from '@material-ui/core'

import './button.scss'

export default function Button({ children, theme='default', ...buttonProps }) {

  return (
    <MButton {...buttonProps} className={`btn bgGradient ${theme}`}>
      {children}
    </MButton>
  )
}
