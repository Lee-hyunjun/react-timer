import React from 'react';
import clsx from 'clsx';

import './list.scss';

export default function List({ direction = "horizontal", className, children }) {
  return (
    <div className={clsx('Clist', direction, className)}>
      {children}
    </div>
  )
}
