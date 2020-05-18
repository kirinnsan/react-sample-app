import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';
import { Link } from 'react-router-dom';

// actionCreater(関数)をインポート
import { readEvents } from '../actions/index'

class EventsIndex extends Component {

  componentDidMount() {
    this.props.readEvents();
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <Link to={`/events/${event.id}`}>
        <td>{event.title}</td>
        </Link >
        <td>{event.body}</td>
      </tr>
    ));
  }

  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>

        <Link to="/events/new">New Event</Link>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ events: state.events })
const mapDispatchToProps = dispatch => ({
  readEvents: () => dispatch(readEvents()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)