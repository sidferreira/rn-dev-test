import React, { Component } from 'react'
import { FlatList, Text, View } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import JobsRedux from '../Redux/JobsRedux'

import Job from '../Components/Job'
// Styles
import styles from './Styles/JobsScreenStyle'

class JobsScreen extends Component {
  componentDidMount() {
    this._firstLoad() //optional
  }

  _firstLoad = () => {
    this.props.jobsRequest(1)
  }

  _loadMore = () => {
    if (!this.props.jobs.fetching && !this.props.jobs.noMore) {
      const nextPage = this.props.jobs.page + 1
      this.props.jobsRequest(nextPage)
    }
  }

  _renderItem = ({item}) => {
    return <Job data={item} onPress={() => {}} />
  }

  _doRefresh = () => {
    console.log('_doRefresh')
  }

  render () {
    const { data, fetching } = this.props.jobs

    return (
      <View style={styles.container}>
        <FlatList
          data={data || []}
          renderItem={this._renderItem}
          onEndReachedThreshold={0.2}
          onEndReached={this._loadMore}
        />
      </View>
    )
  }
}
/*
<FlatList
  data={data || []}
  renderItem={this._renderItem}
  onRefresh={this._firstLoad}
  refreshing={fetching}
  onEndReachedThreshold={0.2}
  onEndReached={this._loadMore}
/>
*/

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs || []
  }
}

export default connect(mapStateToProps, {
  jobsRequest: JobsRedux.jobsRequest
})(JobsScreen)
