import React from 'react';
import { Link } from 'react-router-dom'

import userContext from '../../contexts/userContext';

import './header.scss'

import LogoText from '~assets/images/logo-text.png'
import Profile from '~assets/images/profile.png'

import Dialog from '~ui/dialog/Dialog'
import Sign from '~components/sign/Sign'

export default function UserHeader() {
  const { signDialog } = React.useContext(userContext);

  return (
    <>
    <div className="userHeader">
      <div className="rap">
        <div className="logoBox">
          <Link to="/"><img src={LogoText} alt="logo" /></Link>
        </div>

        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/job">구인/구직</Link>
          <Link to="/company">제공 기관</Link>
          <Link to="/message">메세지함</Link>
          <Link to="/community">커뮤니티</Link>
        </div>

        <div className="profileBox">
          <img src={Profile} alt="profile" onClick={() => signDialog.onOpen()} />
        </div>
      </div>
    </div>
    <Dialog open={signDialog.open} onClose={signDialog.onClose} maxWidth="sm" className="loginDialog">
      <Sign/>
    </Dialog>
    </>
  )
}
