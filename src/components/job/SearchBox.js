import React from 'react'
import clsx from 'clsx';
import { Link } from 'react-router-dom'

import { MenuItem, Select } from '@material-ui/core'
import Button from '~ui/button/Button'
import SearchIcon from '~assets/images/searchIcon.png'
import AddImg from '~assets/images/add.png'

import jobContext from '../../contexts/jobContext';

export default function SearchBox({ type = 'default' }) {
  const { 
    onChangeFilter,
    onSearchSubmit,
    
    state: {
      filter: {
        tab: activeTab,
        address1,
        address2
      },

      stat: {
        jobOfferCount,
        jobSearchCount,
        scrapCount
      }
    }
  } = React.useContext(jobContext);

  const tabs = [
    {
      id: 'jobOffer',
      name: '제공기관',
      count: jobOfferCount
    },
    {
      id: 'jobSearch',
      name: '관심등록',
      count: jobSearchCount
    },
  ]

  return (
    <>
      <div className="tab">
        {tabs.map(tab => (
          <div
            onClick={_ => onChangeFilter('tab', tab.id)}
            className={clsx(activeTab === tab.id ? 'active' : '')}
            key={tab.id}
          >
            {tab.name}({tab.count})
          </div>
        ))}
      </div>
      <div className="searchBox">
        <div className="placeBox selectBox">
          <Select value={address1} onChange={e => onChangeFilter('address1', e.target.value)}>
            <MenuItem value="1">도/광역시</MenuItem>
            <MenuItem value="2">도/광역시1</MenuItem>
            <MenuItem value="3">도/광역시2</MenuItem>
          </Select>
          <Select value={address2} onChange={e => onChangeFilter('address2', e.target.value)}>
            <MenuItem value="1">시/구</MenuItem>
            <MenuItem value="2">시/구</MenuItem>
            <MenuItem value="3">시/구</MenuItem>
          </Select>
        </div>

        <div className="search">
          <Button onClick={_ => onSearchSubmit()}><img src={SearchIcon} alt='search' /></Button>
        </div>
        {type === 'default' ? (
          <Link to='/job/register' className="addNotice">
            <button>
              <img src={AddImg} alt="search icon" />
              구인등록
            </button>
          </Link>
        ) : ''}
        
      </div>
    </>
  )
}
