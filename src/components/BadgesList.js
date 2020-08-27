import React from 'react'
import { Link } from 'react-router-dom'

import './styles/BadgesList.css'
import BadgesListItem from './BadgesListItem'
import useSearchBadges from '../utils/useSearchBadges'

function BadgesList(props) {
  const badges = props.listData

  const { query, setQuery, filteredBadges } = useSearchBadges(badges) 

  if (props.listFetchError) {
    return (
      <div className="BadgesList_error">
        <h3>Sorry, there was an error. Try again.</h3>
      </div>
    )
  }

  if (filteredBadges.length === 0) {
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
    <React.Fragment>
      <div className="Badges__list">
        <div className="form-group">
          <label>Filter Badges</label>
          <input type="text" className="form-control" 
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
            }}
          />
        </div>
        <div className="Badges__container">
          <ul className="list-unstyled BadgesList">
            {filteredBadges.map((badge) => {
              return (
                <Link
                  key={badge.id}
                  to={`/badges/${badge.id}`}
                  className="text-reset text-decoration-none"
                >
                  <BadgesListItem key={badge.id} badgeData={badge} />
                </Link>
              )
            })}
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

export default BadgesList
