import React, { useState, forwardRef } from 'react'
import { Icon, Paper } from '@material-ui/core'
import MaterialTable, { MTableToolbar } from 'material-table'
import clsx from 'clsx'
import produce from 'immer'

import './table.scss'

const Table = ({ term = false, scrollable = false, components = {}, label = '개', options = {}, localization = {}, ...props }) => {

  const [state, setState] = useState({
    filter: {
      start: null,
      end: null
    }
  })

  const handleChangeDate = (start, end) => {
    setState(produce(draft => {
      draft.filter = { start, end }
    }))
  }

  console.log(options)

  return (
    <div className="table">
    <MaterialTable
      components={{
        Container: props => (
          <Paper {...props} className={clsx('custom_table', scrollable && 'scrollable')} />
        ),
        Toolbar: props => (
          <div className="toolbar">
            <MTableToolbar {...props} />
          </div>
        ),
        ...components
      }}
      localization={{
        header: {
          actions: '기능'
        },
        body: {
          emptyDataSourceMessage: '검색된 항목이 없습니다.',
          filterRow: {
            filterTooltip: '필터'
          },
          editRow: {
            saveTooltip: '확인',
            cancelTooltip: '취소',
            deleteText: '정말로 이 항목을 삭제하시겠습니까?'
          },
          addTooltip: '추가',
          deleteTooltip: '삭제',
          editTooltip: '수정'
        },
        grouping: {
          placeholder: '이쪽에 제목을 드래그해 그룹화'
        },
        toolbar: {
          searchTooltip: '검색',
          searchPlaceholder: '검색',
          exportTitle: '엑셀 다운로드',
          exportName: 'CSV 다운로드',
          showColumnsTitle: '항목',
          addRemoveColumns: '항목 추가 또는 삭제'
        },
        pagination: {
          labelRowsSelect: `${label}씩`,
          firstTooltip: '첫번째 페이지',
          previousTooltip: '이전 페이지',
          nextTooltip: '다음 페이지',
          lastTooltip: '마지막 페이지',
          labelDisplayedRows: `{count}${label} 중 {from}~{to}${label}`
        },
        ...localization
      }}
      options={{
        draggable: false,
        search: true,
        doubleHorizontalScroll: true,
        actionsColumnIndex: -1,
        ...options
      }}
      icons={{
        Filter: forwardRef((props, ref) => <Icon {...props} ref={ref}>search</Icon>)
      }}
      {...props}
    />
    </div>
  )
}

export default Table