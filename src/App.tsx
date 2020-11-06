import React, { Dispatch } from 'react';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import SignInSignOut from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

import './App.scss'
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { UserActionsTypes } from './redux/user/user.types';

class App extends React.Component<{}, { currentUser: any }> {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth: any;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      this.setState({ currentUser: user });
    }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App" >
        <Header {...this.state} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shop} />
          <Route path='/signIn' component={SignInSignOut} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<UserActionsTypes>) => ({
  setCurrentUser: (user: string) => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
