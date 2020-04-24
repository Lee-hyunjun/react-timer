import React from 'react';
import clsx from 'clsx';
import { Dialog as MDialog } from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';

import './dialog.scss';

export default function Dialog({ onClose, children, className, ...dialogProps }) {
  return (
    <MDialog {...dialogProps} onClose={onClose} className={clsx(className, "CDialog")}>
      <button className="close-button" onClick={() => onClose()}>
        <CloseIcon />
      </button>
      {children}
    </MDialog>
  )
}
