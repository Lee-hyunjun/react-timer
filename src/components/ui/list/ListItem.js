import React from 'react';
import clsx from 'clsx';
import './listItem.scss';

export function HorizontalItem({ image, title, info, link, buttons = [], className, badge = null, loading = false }) {
  return (
    <div className={clsx("ClistItem", "horizontal-item", className)}>
      {badge && <span className="badge">{badge}</span>}
      <>
        <div className="image">
          <img src={image} alt={title} />
        </div>

        <div className="content">
          <div className="title">
            {title}
            <div className="action">
              {buttons.map((button, i) => (
                <button key={i} onClick={button.onClick}>
                  <span className="material-icons">{button.icon}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="info">{info}</div>
        </div>
      </>
    </div>
  )
}
