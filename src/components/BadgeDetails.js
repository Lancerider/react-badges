import React from 'react'
import { Link } from 'react-router-dom'

import md5 from 'md5'
import Badge from './Badge'
import DeleteBadgeModal from './DeleteBadgeModal'
import NavigationSection from './NavigationSection'

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

      <NavigationSection to="/badges"/>

      <div className="container">
        <div className="row">
          <div className="col offset-3">
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
              <Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>Edit</Link>
              <div>
                <button className="btn btn-danger" onClick={props.onOpenModal}>Delete</button>
                <DeleteBadgeModal onDeleteBadge={props.onDeleteBadge} isOpen={props.modalIsOpen} onClose={props.onCloseModal} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default BadgeDetails
