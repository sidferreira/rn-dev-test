import React, { Component } from 'react'
import { FlatList, Text, View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'

import JobsRedux from '../Redux/JobsRedux'
import Job from '../Components/Job'
import Separator from '../Components/Separator'
import styles from './Styles/JobsScreenStyle'

class JobsScreen extends Component {
  static navigationOptions = {
    title: 'Our Jobs',
    headerTintColor: 'black',
  }

  componentDidMount() {
    this._firstLoad() //optional
  }

  _firstLoad = () => {
    if (this.props && this.props.jobsRequest) {
      this.props.jobsRequest(1)
    }
  }

  _loadMore = () => {
    if (!this.props.jobs.fetching && !this.props.jobs.noMore) {
      const nextPage = this.props.jobs.page + 1
      this.props.jobsRequest(nextPage)
    }
  }

  _renderItem = ({item}) => {
    return <Job key={item.id} data={item} onPress={() => {}} />
  }

  _keyExtractor = (item, index) => item.id

  render () {
    const { data, fetching } = this.props.jobs

    return (
      <FlatList
        style={styles.container}
        data={data || []}
        renderItem={this._renderItem}
        onEndReachedThreshold={0.5}
        onEndReached={this._loadMore}
        keyExtractor={this._keyExtractor}
        ListFooterComponent={<View>{(fetching || false) && <View style={styles.indicator}><ActivityIndicator /></View>}</View>}
        ItemSeparatorComponent={Separator}
      />
    )
  }
}
//ItemSeparatorComponent={<View style={styles.separator} />}

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs || []
  }
}

export default connect(mapStateToProps, {
  jobsRequest: JobsRedux.jobsRequest
})(JobsScreen)
