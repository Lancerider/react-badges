import React from 'react'

import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import Navbar from '../components/Navbar'
import header from '../images/badge-header.svg'
import './styles/BadgeNew.css'

class BadgeNew extends React.Component {
  state = { form: {
    firstName: "",
    lastName: "",
    avatarUrl: "",
    jobTitle: "",
    twitterAccount: "",
  } }

  handleChange = event => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img src={header} alt="Logo" className="img-fluid" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Jorge"
                lastName="Palacios"
                avatarUrl="https://s.gravatar.com/avatar/0404c943a63fa5946f3d38e4017a0ac7?s=80"
                jobTitle="Full Stack Developer"
                twitterAccount="@JorgePalaciosCL"
              />
            </div>
            <div className="col-6">
              <BadgeForm
                formValues={this.state.form}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew
