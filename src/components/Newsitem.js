import React from 'react'

const Newsitem = (props) => {
    let {title, description, imageUrl, newsUrl, author, date} = props; 
    return (
      <div className='my-3'>
        <div className="card container">
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"> <small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small> </p>
                <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-dark btn-sm">Read More</a>
            </div>
        </div>
      </div>
    )
}

export default Newsitem
