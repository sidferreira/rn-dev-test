import React, { Component } from 'react'
import { View, Button, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import LoginRedux from '../Redux/LoginRedux'

// Styles
import styles from './Styles/LoginScreenStyle'

class LoginScreen extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.login.data && nextProps.login.data.timeout > parseInt(Date.now()/1000)) {
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'JobsScreen' })
        ]
      })
      this.props.navigation.dispatch(resetAction)
      return false
    }
    return true
  }

  _onPressLogin = () => {
    this.props.loginRequest('sid@ferreiraz.com.br', 'dk5j4uafcF9dabEIpjjbOPTP')
  }
//  style={styles.loginButton}
  render () {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Button
            style={{flex: 1,marginTop: 100, width: 300, height: 100, backgroundColor: 'red'}}
            onPress={this._onPressLogin}
            title="Login" />
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

export default connect(mapStateToProps, {
  loginRequest: LoginRedux.loginRequest
})(LoginScreen)
