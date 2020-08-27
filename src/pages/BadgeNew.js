import React from 'react'

import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import PageLoading from '../components/PageLoading'
import header from '../images/platziconf-logo.svg'
import './styles/BadgeNew.css'
import api from '../api'

class BadgeNew extends React.Component {
  state = { 
    error: null,
    loading: false,
    form: {
      firstName: "",
      lastName: "",
      avatarUrl: "",
      jobTitle: "",
      twitterAccount: "",
    }
  }

  handleChange = event => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    this.setState({ loading: true, error: null})

    try {
      await api.badges.create(this.state.form)
      this.setState({ loading: false, error: null})

      this.props.history.push('/badges')
    } catch (error) {
      this.setState({ loading: false, error: error})
    }
  }

  render() {
    if (this.state.loading) {
      return <PageLoading />
    }
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img src={header} alt="Logo" className="img-fluid BadgeNew__hero-image" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={this.state.form.firstName || 'First Name'}
                lastName={this.state.form.lastName || 'Last Name'}
                avatarUrl="https://s.gravatar.com/avatar/0404c943a63fa5946f3d38e4017a0ac7?s=80"
                email={this.state.form.email || 'email'}
                jobTitle={this.state.form.jobTitle || 'Job Title'}
                twitterAccount={this.state.form.twitter || 'Twitter'}
              />
            </div>
            <div className="col-6">
              <h1>New Attendant</h1>
              <BadgeForm
                formValues={this.state.form}
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeNew
