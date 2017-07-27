import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, PixelRatio, Image } from 'react-native'
import styles from './Styles/JobStyle'

export default class Job extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    const { data, onPress } = this.props
    const imageSource = 'https://res.cloudinary.com/chris-mackie/image/upload/v1500966701/profile_12195-avatar.jpg'
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Image source={{uri: imageSource}}  style={styles.cardImage}/>
          <View style={styles.verticalView}>
            <Text key={data.id}>{data.role + ' @ ' + data.company}</Text>
          </View>
        </View>
      </View>
    )
  }
}
