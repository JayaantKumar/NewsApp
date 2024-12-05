import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        // eslint-disable-next-line
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <div className="my-2">
                <div className="card" >
                <div style={{display: 'flex', justifyContent:'flex-end', position:'absolute', right: '0'}}>
                    <span className='badge rounded-pill bg-danger'>NEW</span>
                </div>
                    <img src={imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default NewsItem