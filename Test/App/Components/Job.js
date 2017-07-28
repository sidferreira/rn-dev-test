import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './Styles/JobStyle'

export default class Job extends Component {
  render () {
    const { data, onPress } = this.props
    const imageSource = `https://res.cloudinary.com/chris-mackie/image/upload/c_thumb/v${data.employer_img_v}/${data.employer_img}.jpg`
    return (
      <View style={styles.container}>
        <Image source={{uri: imageSource}}  style={styles.image}/>
        <View style={styles.verticalView}>
          <Text style={styles.textTitle}>{data.role}</Text>
          <Text style={styles.textCompany}>{data.company}</Text>
          <Text style={styles.textDescription} numberOfLines={4}>{data.full_description}</Text>
        </View>
      </View>
    )
  }
}
