import React from 'react';
import { withKnobs, text, radios }  from '@storybook/addon-knobs';
import { Typography } from '@material-ui/core'

import '~/App.scss';
import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
  decorators: [withKnobs]
}

export function Default() {
  return (
    <Checkbox
      label={text('label', 'label')}
      color={radios("color", ["primary", "secondary"], "색깔을 선택하세요")}
    />
  )
}

export function Label() {
  return (
    <Checkbox label="This is label text" />
  )
}

export function Color() {
  return (
    <div>
      <Typography variant="h4">Color - secondary (default)</Typography>
      <Checkbox />

      <Typography variant="h4">Color - primary</Typography>
      <Checkbox color="primary" />
    </div>
  )
}

export function MuiProps() {
  return (
    <div>
      <Typography variant="h5">해당 컴포넌트는 Material UI가 사용된 컴포넌트입니다.</Typography>
      <Typography variant="h5">해당 문서 이외의 Props는 아래 링크를 참고해 주세요</Typography>

      <br />

      <a className="sbLink" target="_blank" href="https://material-ui.com/components/checkboxes/">Material UI - checkboxes</a>
    </div>
  )
}