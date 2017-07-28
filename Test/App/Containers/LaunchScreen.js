import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

class LaunchScreen extends Component {

  componentWillMount() {
    let routeName = 'LoginScreen'
/*    if (this.props.login.data && this.props.login.data.timeout > parseInt(Date.now()/1000)) {
      routeName = 'JobsScreen'
    }*/
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName })
      ]
    })
    this.props.navigation.dispatch(resetAction)
  }

  render () {
    return (
      <View style={styles.mainContainer} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

export default connect(mapStateToProps)(LaunchScreen)
