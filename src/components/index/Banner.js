import React from 'react';

import { TextField, MenuItem, Select } from '@material-ui/core'

import Button from '../ui/button/Button'

import './banner.scss'

import VisualImage from '~assets/images/mainVisual.png';
import VisualContent from '~assets/images/mainVisualContent.png';
import SearchIcon from '~assets/images/searchIcon.png'

export default function IndexBanner() {
  return (
    <div className="indexBanner">
      <div className="bgBox">
        <img src={VisualImage} />
      </div>

      <div className="content">
        <img src={VisualContent} />
      </div>

      <div className="searchBox rap">
        <div className="left">
          <div className="imgBox"></div>
          <div className="txt">SEARCH</div>
        </div>
        <div className="right">
          <div className="selectBox">
            <Select
              value="1"
            >
              <MenuItem value="1">도/광역시</MenuItem>
              <MenuItem value="2">도/광역시1</MenuItem>
              <MenuItem value="3">도/광역시2</MenuItem>
            </Select>
            <Select
              value="1"
            >
              <MenuItem value="1">시/구</MenuItem>
            </Select>
            <Select
              value="1"
            >
              <MenuItem value="1">활동보조인</MenuItem>
            </Select>
          </div>
          <div className="searchBtn">
            <Button><img src={SearchIcon} alt='search' /></Button>
          </div>
        </div>
      </div>
    </div>
  )
}