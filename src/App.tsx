import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import moment from 'moment';
import zhCN from 'antd/lib/locale/zh_CN';
import Home from './pages/home';
// import User from './pages/user';
import 'antd/dist/antd.less';
import 'moment/dist/locale/zh-cn';

moment.locale('zh-cn');

function App(): React.ReactNode {
  return (
    <ConfigProvider locale={zhCN}>
      <Home />
      {/* <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/user">
            <User />
          </Route>
        </Switch>
      </Router> */}
    </ConfigProvider>
  );
}

export default App;
