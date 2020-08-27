import React from 'react'

export default function useSearchBadges(badges) {
  console.log("Console log : useSearchBadges -> badges", badges)
  const [query, setQuery] = React.useState('')
  const [filteredBadges, setFilteredBadges] = React.useState(badges)

  React.useMemo(() => {
    const results = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase())
    })

    setFilteredBadges(results)
  }, [badges, query])

  return { setQuery, filteredBadges }
}