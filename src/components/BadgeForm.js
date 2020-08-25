import React from 'react'

import './styles/Badge.css'
class BadgeForm extends React.Component {
  handleClick = (event) => {
    console.log('Button was clicked')
  }

  render() {
    return (
      <div className="">
        <h1>New Attendat</h1>

        <form onSubmit={this.handleSubmit} action="">
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="firstName"
              className="form-control"
              value={this.props.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="lastName"
              className="form-control"
              value={this.props.lastName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="email"
              className="form-control"
              value={this.props.email}
            />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="jobTitle"
              className="form-control"
              value={this.props.jobTitle}
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="twitter"
              className="form-control"
              value={this.props.twitter}
            />
          </div>
          <button
            onClick={this.handleClick}
            className="btn-primary btn"
          >
            Save
          </button>
        </form>
      </div>
    )
  }
}

export default BadgeForm
