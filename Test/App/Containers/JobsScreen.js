import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import JobsRedux from '../Redux/JobsRedux'

// Styles
import styles from './Styles/JobsScreenStyle'

class JobsScreen extends Component {
  componentDidMount() {
    this.props.jobsRequest(1) //optional
  }

  render () {
    const jobs = this.props.jobs || []
    if (Array.isArray(this.props.jobs)) {
        console.log('this.props.jobs', this.props.jobs)
    }

    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>g1</Text>
          { jobs.map((job, i) => <Text key={job.id}>{job.role + ' @ ' + job.company}</Text> ) }
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs.data || []
  }
}

export default connect(mapStateToProps, {
  jobsRequest: JobsRedux.jobsRequest
})(JobsScreen)
