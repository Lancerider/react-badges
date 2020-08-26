import React from 'react'
import { Link } from 'react-router-dom'

import './styles/BadgesList.css'
import BadgesListItem from './BadgesListItem'

class BadgesList extends React.Component {
  render() {
    if (this.props.listFetchError) {
      return (
        <div className="BadgesList_error">
          <h3>Sorry, there was an error. Try again.</h3>
        </div>
      )
    }

    if (this.props.listData.length === 0) {
      return (
        <div className="BadgesList_no-data">
          <h3>No badges were found</h3>
          <Link to="/badges/new" className="btn btn-primary">
            Create new badge
          </Link>
        </div>
      )
    }

    return (
      <div className="Badges__list">
        <div className="Badges__container">
          <ul className="list-unstyled BadgesList">
            {this.props.listData.map((badge) => {
              return (
                <Link
                  to={`/badges/${badge.id}/edit`}
                  className="text-reset text-decoration-none"
                >
                  <BadgesListItem key={badge.id} badgeData={badge} />
                </Link>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default BadgesList
