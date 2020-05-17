import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

// actionCreater(関数)をインポート
// import { postEvent } from '../actions/index'

class EventNew extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          新規作成
        </div>
      </React.Fragment>
    )
  }
}

// const mapDispatchToProps = dispatch => ({
  // postEvent: () => dispatch(postEvent()),
// });

export default connect(null, null)(EventNew)
