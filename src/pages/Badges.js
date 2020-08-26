import React from 'react'
import { Link } from 'react-router-dom'

import BadgesList from '../components/BadgesList'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import confLogo from '../images/badge-header.svg'
import './styles/Badges.css'
import api from '../api'

class Badges extends React.Component {
  state = {
    loading: true,
    BadgesList: undefined,
    error: null,
  }

  constructor(props) {
    super(props)
    this.state = {
      badgesList: [],
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null })

    try {
      const data = await api.badges.list()
      this.setState({ loading: false, badgesList: data })
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }

  render() {
    if (this.state.loading) {
      return <PageLoading/>
    }

    if (this.state.error) {
      return <PageError error={this.state.error}/>
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Bages__conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
          <BadgesList
            key="BadgesList"
            listData={this.state.badgesList}
            listFetchError={this.state.error}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default Badges
