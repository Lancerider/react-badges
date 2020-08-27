import React from 'react'

import BadgeDetails from '../components/BadgeDetails'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'

import api from '../api'

import './styles/BadgeDetails.css'
import '../components/styles/notFoundData.css'

class BadgeDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null })

    try {
      const badgeInfo = await api.badges.read(this.props.match.params.badgeId)

      this.setState({ loading: false, data: badgeInfo })
    } catch (error) {
      this.setState({ loading: false, error })
    }
  }

  handleOpenModal = (event) => {
    this.setState({ modalIsOpen: true })
  }

  handleCloseModal = (event) => {
    this.setState({ modalIsOpen: false })
  }

  handleDeleteBadge = async (event) => {
    this.setState({ loading: true, error: null })
    
    try {
      await api.badges.remove(
        this.props.match.params.badgeId
      )
      this.setState({ loading: false })
      this.props.history.push('/badges')
    } catch (error) {
      this.setState({ loading: false, error })
    }
  }

  render() {
    if (this.state.loading) {
      return <PageLoading />
    }
    
    if (this.state.error) {
      return <PageError error={ this.state.error.message }/>
    }

    const notBadgeInfo = Object.keys(this.state.data).length === 0

    if (notBadgeInfo) {
      return (
        <div className="notFoundData">
          <h1>Badge no existe</h1>
        </div>
      )
    }

    return (
      <BadgeDetails
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        modalIsOpen={this.state.modalIsOpen}
        onDeleteBadge={this.handleDeleteBadge}
        badge={this.state.data}
      />
    )
  }
}

export default BadgeDetailsContainer
