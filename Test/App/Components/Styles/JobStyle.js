import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.marginVertical,
    marginRight: Metrics.marginHorizontal,
    marginLeft: Metrics.marginHorizontal,
    flexDirection: 'column'
  },
  card: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 4,
    backgroundColor: '#fff',
    padding: 6,
    flexDirection: 'row'
  },
  cardImage: {
    flex: 0,
    width: 60,
    height: 60,
  },
  verticalView: {
    marginRight: Metrics.marginHorizontal,
    marginLeft: Metrics.marginHorizontal,
    flex: 1,
    flexDirection: 'row'
  },
})
