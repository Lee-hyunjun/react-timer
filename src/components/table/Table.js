import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import produce from 'immer'

import { MenuItem, Select, Button as MButton } from '@material-ui/core'

import './table.scss'
import PrevAllImg from '~assets/images/prev_all.png'
import PrevImg from '~assets/images/prev.png'
import NextAllImg from '~assets/images/next_all.png'
import NextImg from '~assets/images/next.png'

export default function Table({ columns = [], datas = [], orderValue, orders = [], orderChange = () => {}, onRowClick = () => {} }) {
  const [state, setState] = useState({
    page: 1,
    pageBtnHtml: [],
    maxPage: 0
  })

  console.log(datas)
  
  useEffect(() => {
    let html = []
    const max = Math.ceil(datas.length / 10)
    const block = Math.ceil(state.page / 4)
    
    for (let i = (block - 1) * 4 + 1; i <= block * 4; i++) {
      if (i > max) {
        break;
      }
      
      html.push([
        <button key={i} className={i === state.page ? 'active' : ''}>{i}</button>,
        i
      ])
    }

    setState(produce(v => {
      v.pageBtnHtml = html
      v.maxPage = max
    }))
    
  }, [state.page, datas.length])

  return (
    <div className="table">
      <div className="headerInfo">
        <div className="title">총 <span>{datas.length}</span>건이 검색 되었습니다.</div>
        <div className="order">
          <Select value={orderValue} onChange={e => orderChange(e.target.value)}>
            {orders.map((order, i) => (
              <MenuItem key={i} value={order.value}>{order.name}</MenuItem>
            ))}
          </Select>
        </div>
      </div>

      <table>
        <thead>
          <tr className="header">
            {columns.map((item, i) => (
              <th key={i}>{item.label}</th>
            ))}
          </tr>
        </thead>
        
        <tbody className="content">
          {datas.slice((state.page-1)*10, state.page*10).map((item, i) => (
            <tr className="item" key={i} onClick={() => onRowClick(item, i)}>
              {columns.map((key, o) => (
                <td key={o}>{item[key.name]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pageBtn">
        <div>
          <MButton onClick={() => {
            setState(produce(v => {
              v.page = 1
            }))
          }}><img src={PrevAllImg} alt="icon" /></MButton>
        </div>
        <div>
          <MButton onClick={() => {
            let page = state.page - 1
            setState(produce(v => {
              v.page = page < 1 ? 1 : page
            }))
          }}><img src={PrevImg} alt="icon" /></MButton>
        </div>
        {state.pageBtnHtml.map((item, i) => (
          <div key={i} onClick={() => {
            setState(produce(v => {
              v.page = item[1]
            }))
          }}>{item[0]}</div>
        ))}
        <div>
          <MButton onClick={() => {
            let page = state.page + 1
            setState(produce(v => {
              v.page = page > state.maxPage ? state.maxPage : page
            }))
          }}><img src={NextImg} alt="icon" /></MButton>
        </div>
        <div>
          <MButton onClick={() => {
            setState(produce(v => {
              v.page = state.maxPage
            }))
          }}><img src={NextAllImg} alt="icon" /></MButton>
        </div>
      </div>
    </div>
  )
}
