import React from 'react'


const Card = ({Title, content}) => {
  return (
    <div className="card">
      <h1 className="card-tittle">Tittle
      {Title}
      </h1>
      <div className="card-content">
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Card