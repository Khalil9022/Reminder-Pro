import React, { Component } from "react";
import { connect } from 'react-redux'
import { addReminder, deleteReminder } from '../action'

class App extends Component {

  state = { text: '' }

  addReminder() {
    this.props.addReminder(this.state.text)
    // console.log("this.state : ", this.state);
  }

  deleteReminder(id) {
    console.log('deleting in application', id);
    console.log('this.props', this.props);
    this.props.deleteReminder(id)
  }

  renderReminders() {
    const { reminders } = this.props
    // console.log('reminders', reminders);
    return (
      <ul className="list-group col-sm-4">
        {
          reminders.map(reminder => {
            return (
              <li key={reminder.id} className="list-group-item">
                <div className="list-item">{reminder.text}</div>
                <div
                  className="list-item delete-button"
                  onClick={() => this.deleteReminder(reminder.id)}>
                  &#x2715;
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render() {
    return (
      <div className="App">
        <div className="title">
          Reminder Pro
        </div>
        <div className="form-inline reminder-form">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="I have to..."
              onChange={event => this.setState({ text: event.target.value })} />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.addReminder()}>Add Reminder</button>
        </div>
        {this.renderReminders()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    reminders: state
  }
}

export default connect(mapStateToProps, { addReminder, deleteReminder })(App);