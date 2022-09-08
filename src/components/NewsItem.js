import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, publishedAt, author, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display: 'flex', justifyContent:'center', position:'absolute', right:'0'}}>
            <span className="badge rounded-pill bg-danger">
              {source}
              <span className="visually-hidden">unread messages</span>
            </span>
          </div>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}.....</p>
            <p className="card-text">
              <small className="text-muted">
                By {author} on {publishedAt}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
              rel="noreferrer"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
