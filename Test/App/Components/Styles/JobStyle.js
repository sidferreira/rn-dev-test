import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: Metrics.marginHorizontal,
    flexDirection: 'row'
  },
  image: {
    flex: 0,
    width: 80,
    height: 80,
  },
  verticalView: {
    marginRight: Metrics.marginHorizontal,
    marginLeft: Metrics.marginHorizontal,
    flex: 1,
    flexDirection: 'column'
  },
  horizontalView: {
    flex: 1,
    flexDirection: 'row'
  },
  textTitle: {
    fontSize: Fonts.size.regular,
    fontWeight: 'bold'
  },
  textCompany: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.emphasis,
    marginTop: Metrics.smallMargin,
    color: '#aaa'
  },
  textDescription: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.base,
    marginTop: Metrics.smallMargin,
    color: '#999'
  }
})
