import React from 'react'
import { Checkbox as MuiCheckbox, FormControlLabel } from '@material-ui/core'
import clsx from 'clsx'

import './checkbox.scss'

export default function Checkbox({ className, label, color = 'secondary', ...props }) {
  return (
    <FormControlLabel
      className={clsx('ui_checkbox', className)}
      control={
        <MuiCheckbox
          icon={<span className="icon" />}
          checkedIcon={<span className="icon checkedIcon" />}
          color={color}
          {...props}
        />
      }
      label={label}
    />
  )
}
