import './index.css'

const History = props => {
  const {historyList, onDeletehistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyList

  const onDelete = () => {
    onDeletehistory(id)
  }
  return (
    <li className="list-item">
      <div className="card">
        <p className="time">{timeAccessed}</p>

        <img className="logoImg" alt="domain logo" src={logoUrl} />
        <p className="titleEle">{title}</p>
        <p className="domainEle">{domainUrl}</p>
      </div>
      <button
        onClick={onDelete}
        data-testid="delete"
        type="button"
        className="btn"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="deleteImg"
        />
      </button>
    </li>
  )
}

export default History
