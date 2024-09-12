import React, { useState } from 'react';
import './categorylist.css';
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from '../../FeatureSlice/NewSlice';
import img1 from '../../image/img1.jpg'


const CategoryList = () => {
  const categories = ['Fashion', 'Bitcoin', 'Global warming', 'Current affairs', 'Cricket'];
  const [categoryData, setCategoryData] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.newsApi.news;
  });

  const { articles } = data || [];


  const handleCategoryClick = (category) => {
    
    dispatch(fetchData(category))
      .then((response) => response.json())
      .then((data) => setCategoryData(data))
      .catch((error) => console.error('Error fetching data:', error));
  };

  const moredetails = (url) => {
    window.location.href = url;
  };

  return (
    <div className="category-list">
    <ul>
      {categories.map((category, index) => (
        <li key={index} onClick={() => handleCategoryClick(category)}>
          {category}
        </li>
      ))}
    </ul>
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
    </div>
  );
};

export default CategoryList;
