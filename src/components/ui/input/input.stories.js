import React from 'react';
import { withKnobs, text, radios }  from '@storybook/addon-knobs';
import { Typography } from '@material-ui/core'

import '~/App.scss';
import Input from './Input';

export default {
  title: 'Input',
  decorators: [withKnobs]
}

export function Default() {
  return (
    <Input
      label={text('label', '라벨')}
      placeholder={text('placeholder', 'placeholder')}
      theme={radios('theme', ['outlined', 'filled', 'shadow'], 'outlined')}
      color={radios('color', ['primary', 'secondary'], 'primary')}
    ></Input>
  )
}

export function Theme() {
  return (
    <div>
      <Typography variant="h4">Outlined (default)</Typography>
      <Input theme="outlined"></Input>

      <Typography variant="h4">Filled</Typography>
      <Input theme="filled"></Input>

      <Typography variant="h4">Shadow</Typography>
      <Input theme="shadow"></Input>
    </div>
  )
}

export function Adornment() {
  return (
    <div>
      <Typography variant="h4">Position - start</Typography>
      <Input adornment={{
        start: {
          type: 'button',
          icon: 'search',
          text: 'search',
          onClick: () => alert('hi')
        }
      }}></Input>

      <Typography variant="h4">Position - end</Typography>
      <Input adornment={{
        end: {
          type: 'button',
          icon: 'search',
          text: 'search',
          onClick: () => alert('hi')
        }
      }}></Input>

      <Typography variant="h4">Position - start & end</Typography>
      <Input adornment={{
        start: {
          type: 'icon',
          icon: 'sentiment_satisfied'
        },
        end: {
          type: 'button',
          icon: 'search',
          text: 'search',
          onClick: () => alert('hi')
        }
      }}></Input>

      <Typography variant="h4">Type - button</Typography>
      <Input adornment={{
        end: {
          type: 'button',
          icon: 'search',
          text: 'search',
          onClick: () => alert('hi')
        }
      }}></Input>

      <Typography variant="h4">Type - icon</Typography>
      <Input adornment={{
        end: {
          type: 'icon',
          icon: 'search'
        }
      }}></Input>

      <Typography variant="h4">Type - custom</Typography>
      <Input adornment={{
        end: {
          type: 'custom',
          body: <>￦</>
        }
      }}></Input>
    </div>
  )
}

export function Color() {
  return (
    <Input color="secondary" adornment={{
      start: {
        type: 'button',
        icon: 'search',
        text: 'search'
      }
    }}></Input>
  )
}

export function MuiProps() {
  return (
    <div>
      <Typography variant="h5">해당 컴포넌트는 Material UI가 사용된 컴포넌트입니다.</Typography>
      <Typography variant="h5">해당 문서 이외의 Props는 아래 링크를 참고해 주세요</Typography>

      <br />

      <a className="sbLink" target="_blank" href="https://material-ui.com/components/text-fields/">Material UI - text fields</a>
    </div>
  )
}