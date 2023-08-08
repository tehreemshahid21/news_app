import React from "react";
import "./cards.css";
import img1 from '../../image/img1.jpg'
import { useSelector, useDispatch } from "react-redux";

const Card = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.newsApi.news;
  });

  const { articles } = data || [];

  const moredetails = (url) => {
    window.location.href = url;
  };

  return (
    <div className="card-list">
      {articles?.map((article, index) => {
        const { title, description, urlToImage, author, publishedAt, url } =
          article;

          const imageUrl = urlToImage || img1;

        const publishedDate = new Date(publishedAt);

        const formattedDate = publishedDate.toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        });

        return (
          <div key={index} className="card">
          <img
            src={imageUrl}
            alt={title}
            className="card-image"
           />
            <div className="card-content">
              <h2 className="card-title">{title}</h2>
              <p className="card-description">{description}</p>
              <div className="card-details">
                <span className="card-author">Author: {author}</span>
                <span className="card-published">
                  Published: {formattedDate}
                </span>
              </div>
              <button
                className="more-details-button"
                onClick={() => moredetails(url)}
              >
                More Details
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
