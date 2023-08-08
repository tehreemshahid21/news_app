import React, { useEffect } from 'react';
import './searchhome.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../FeatureSlice/NewSlice';

const SearchHome = () => {
  const [searchName, setSearchName] = useState('');
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.newsApi.news;
  });

  console.log(data);

  const HandleSearch = () => {
    if (searchName.trim() === '') {
      // Fetch all news when searchName is empty
      dispatch(fetchData());
    } else {
      // Fetch news based on searchName
      dispatch(fetchData(searchName))
        .then(() => {
          setSearchName('');
        })
        .catch((error) => {
          console.error('Error', error);
        });
    }

    console.log(searchName);
  };

  const { articles } = data || {};
  const main1 = articles?.[0]?.title;

  useEffect(() => {
    dispatch(fetchData('sports'));
  }, [dispatch]);

  return (
    <div className='searchbox'>
      <div className='searchbar'>
        <input
          className='search'
          type='text'
          placeholder='Search for any news'
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
      </div>
      <div className='button'>
        <button className='btn' onClick={HandleSearch}>
          Search me
        </button>
      </div>
    </div>
  );
};

export default SearchHome;
