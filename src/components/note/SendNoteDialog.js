import React from 'react'
import clsx from 'clsx'

import './note.scss'

import Dialog from '~ui/dialog/Dialog'
import Input from '~ui/input/Input'
import Button from '~ui/button/Button'

export default function SendNoteDialog({ id, open, onClose, className = '' }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth className={clsx('sendNoteDialog', className)}>
      <h1>쪽지 보내기</h1>

      <Input label="제목" />

      <Input label="내용입력" multiline rows="7" />

      <Button>보내기</Button>

      <span className="helperText">※최대 500자 이내로 작성해 주시기 바랍니다.</span>
    </Dialog>
  )
}
