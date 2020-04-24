import React from 'react';
import { Switch, Route } from 'react-router-dom';

import userRoute from './route/user';

import Header from '~manage/header/Header';
import Footer from '~manage/footer/Footer';

import ManageIndex from './pages/manage/Index'
import SupportAdd from './pages/manage/SupportAdd'
import SupportList from './pages/manage/SupportList'
import ServiceAdd from './pages/manage/ServiceAdd'
import Servicemanage from './pages/manage/Servicemanage'
import ServiceList from './pages/manage/ServiceList'
import SeriousAdd from './pages/manage/SeriousAdd'
import SeriousList from './pages/manage/SeriousList'
import TransfeeAdd from './pages/manage/TransfeeAdd'
import TransfeeList from './pages/manage/TransfeeList'
import InsuranceAdd from './pages/manage/InsuranceAdd'
import InsuranceList from './pages/manage/InsuranceList'
import IntegrationAdd from './pages/manage/IntegrationAdd'
import IntegrationList from './pages/manage/IntegrationList'
import ReginfoList from './pages/manage/ReginfoList'
import SalaryCalc1 from './pages/manage/SalaryCalc1'
import SalaryCalc2 from './pages/manage/SalaryCalc2'
import SalaryNotice from './pages/manage/SalaryNotice'
import SalaryStatement from './pages/manage/SalaryStatement'
import SalaryOther from './pages/manage/SalaryOther'


import './Manage.scss';

export default function Manage() {
  document.getElementsByTagName('body')[0].style.fontSize = '16px'
  document.getElementsByTagName('body')[0].style.background = '#f2f3f5'
  document.getElementsByTagName('html')[0].style.fontSize = '16px'

  return (
    <div className="manage">
      <Header />
        <Switch>
          <Route exact path='/manage' component={ManageIndex} />
          <Route exact path='/manage/support/add' component={SupportAdd} />
          <Route exact path='/manage/support/list' component={SupportList} />
          <Route exact path='/manage/service/add' component={ServiceAdd} />
          <Route exact path='/manage/service/manage' component={Servicemanage} />
          <Route exact path='/manage/service/list' component={ServiceList} />
          <Route exact path='/manage/serious/add' component={SeriousAdd} />
          <Route exact path='/manage/serious/list' component={SeriousList} />
          <Route exact path='/manage/transfee/add' component={TransfeeAdd} />
          <Route exact path='/manage/transfee/list' component={TransfeeList} />
          <Route exact path='/manage/insurance/add' component={InsuranceAdd} />
          <Route exact path='/manage/insurance/list' component={InsuranceList} />
          <Route exact path='/manage/insurance/list' component={InsuranceList} />
          <Route exact path='/manage/integration/add' component={IntegrationAdd} />
          <Route exact path='/manage/integration/list' component={IntegrationList} />
          <Route exact path='/manage/reginfo/list' component={ReginfoList} />
          <Route exact path='/manage/salary/calc1' component={SalaryCalc1} />
          <Route exact path='/manage/salary/calc2' component={SalaryCalc2} />
          <Route exact path='/manage/salary/notice' component={SalaryNotice} />
          <Route exact path='/manage/salary/statement' component={SalaryStatement} />
          <Route exact path='/manage/salary/other' component={SalaryOther} />
          

          
        </Switch>
      <Footer />
    </div>
  )
}