import React from 'react'

import Gravatar from './Gravatar'

function Badge(props) {
  const badge = props.badgeData || []
  return (
    <li className="BadgesListItem">
      <Gravatar className="BadgesListItem__avatar" email={badge.email} alt="Avatar" />
      <div>
        <div>
          <strong>
            {badge.firstName} {badge.lastName}
          </strong>
        </div>
        <div className="Twitter__name">
          <span className="Twitter__logo"></span>@{badge.twitter}
        </div>
        <div>{badge.jobTitle}</div>
      </div>
    </li>
  )
}

export default Badge
