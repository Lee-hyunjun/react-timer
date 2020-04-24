import React from 'react'
import clsx from 'clsx'
import { Button as MuiButton } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import LogoText from '~assets/images/logo-text.png'

export default React.memo(function MessageListItem({ type, ...item }) {
  const history = useHistory()

  const handleViewMessage = () => {
    history.push('/message/detail')
  }

  return (
    <div className="messageListItem">
      <div className={clsx('badge', item.category)}>{item.category === 'jobOffer' ? '구인' : '구직'}</div>

      {type !== 'company' ? '' : (
        <>
          <div style={{textAlign: 'center', margin: '30px 0 40px 0'}}>
            <img src={LogoText} alt='logo' style={{
              width: '50%'
            }} />
          </div>
          <h2 style={{textAlign: 'center', marginBottom: '40px'}}>{item.title}</h2>
        </>
      )}

      {type !== 'default' ? '' : (
        <>
        <h2>{item.title}</h2>

        <div className="infos">
          <div className="item">
            <div>지역</div>
            <div>{item.area}</div>
          </div>

          <div className="item">
            <div>성별</div>
            <div>{item.gender}</div>
          </div>

          <div className="item">
            <div>활동영역</div>
            <div>{item.activeArea}</div>
          </div>
        </div>
        <div className="divider" />

        <div className="status">
          <h3>구인중</h3>
          <span>{item.endDate}마감예정</span>
        </div>
        </>
      )}


      <MuiButton
        className="viewButton"
        variant="contained"
        color={item.category === 'jobOffer' ? 'primary' : 'secondary'}
        onClick={handleViewMessage}
        fullWidth
      >
        메세지 보기 ({(+item.newMessageCount).toLocaleString()})
      </MuiButton>
    </div>
  )
})