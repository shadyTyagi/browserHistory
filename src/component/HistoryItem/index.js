import React from 'react'

import './index.css'

const HistoryItem = props => {
  const {details, deleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = details

  const handleClick = () => {
    deleteHistoryItem(id)
  }

  return (
    <li>
      <div className="container">
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" />
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
      <div>
        <button testid="delete" onClick={handleClick}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
