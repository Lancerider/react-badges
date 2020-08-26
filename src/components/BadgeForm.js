import React from 'react'

import './styles/Badge.css'
class BadgeForm extends React.Component {

  render() {
    return (
      <div className="">
        <h1>New Attendat</h1>

        <form onSubmit={this.props.onSubmit} action="">
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="firstName"
              className="form-control"
              value={this.props.formValues.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="lastName"
              className="form-control"
              value={this.props.formValues.lastName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="email"
              className="form-control"
              value={this.props.formValues.email}
            />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="jobTitle"
              className="form-control"
              value={this.props.formValues.jobTitle}
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="twitter"
              className="form-control"
              value={this.props.formValues.twitter}
            />
          </div>
          <button
            className="btn-primary btn"
          >
            Save
          </button>
          {this.props.error
            && (<p className="text-danger">{this.props.error.message}</p>)}
        </form>
      </div>
    )
  }
}

export default BadgeForm
