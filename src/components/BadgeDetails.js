import React from 'react'
import { Link } from 'react-router-dom'

import md5 from 'md5'
import Badge from './Badge'

import confLogo from '../images/platziconf-logo.svg'

function BadgeDetails(props) {
  const badge = props.badge
  return (
    <React.Fragment>
      <div className="BadgeDetails__Containerhero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Logo de la Conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              avatarUrl={`https://www.gravatar.com/avatar/${md5(badge.email)}?d=identicon`}
              email={badge.email}
              jobTitle={badge.jobTitle}
              twitterAccount={badge.twitter}
            />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div>
              <div>
                <Link className="btn btn-primary mb4" to={`/badges/${badge.id}/edit`}>Edit</Link>
              </div>
              <div>
                <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default BadgeDetails
