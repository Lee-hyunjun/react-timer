import React from 'react'

import './upload.scss'

export default function Upload({ title = "", info = "" }) {
  return (
    <div className="uploadForm">
      <div className="box info">
        <div className="header">{title}</div>
        <div className="info">{info}</div>
      </div>
      <div className="box uploadBox">
        <div className="header">파일 업로드</div>
        <div className="upload">
          <input type="file" />
          <div className="info">
            <h2>해당 양식에 입력 완료 후 파일 업로드하기</h2>
            <div className="more">(이 영역을 클릭하여 파일 선택 또는 파일 드래그 앤 드롭)</div>
            <div className="warn">
              <p>* 한 개의 파일만 업로드 하실 수 있습니다. 두 개의 파일을 올리셔도 데이터가 합쳐지지 않습니다.</p>
              <p>* 개인 인터넷 브라우저 환경 설정에 따라 드래그앤드롭 기능이 잘 되지 않는 경우 클릭해서 업로드 하시기 바랍니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}