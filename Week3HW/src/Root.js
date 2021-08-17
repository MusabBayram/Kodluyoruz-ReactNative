import React, {Component} from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';

import Login from './components/Login';
import Form from './components/Form';

export default class Root extends Component {
  render() {
    return (
      <Router>
        <Stack key="Root">//ana bileşenimiz
          <Scene key="Login" component={Login} hideNavBar initial />//login olunacak ekrana yönlendirilmesi için oluşturulan bileşen ve initial ile ilk açılan ekran olmasını sağlıyoruz
          <Scene key="Form" component={Form} hideNavBar />//login olunduktan sonraki sayfanın bileşeni
        </Stack>
      </Router>
    );
  }
}
