import { Menu, Search, SearchIcon, UserCircle } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import youtubeLogo from '../assets/youtube-logo.png';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/sidenavSlice';
import { SEARCH_SUGGESTIONS_API } from '../utils/constants';

const Header = () => {
  const [searchText, setSearchText] = useState('');

  const dispatch = useDispatch();

  const toggleSideNav = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timeout = setTimeout(() => getSearchResults(), 200);

    // console.log('Searched', searchText);
    return () => {
      clearTimeout(timeout);
    };
  }, [searchText]);

  const getSearchResults = async () => {
    const data = await fetch(SEARCH_SUGGESTIONS_API + '&q=' + searchText);
    const response = await data.json();
    console.log(searchText, response);
  };

  return (
    <div className='flex justify-between items-center p-4 shadow-lg'>
      <div className='flex items-center gap-4'>
        <Menu onClick={toggleSideNav} />
        <img className='w-28' src={youtubeLogo} alt='youtube-logo' />
      </div>
      <div className='flex items-stretch w-2/6 relative'>
        <input
          className='border-gray-400 w-[110%] border-solid border rounded-l-full px-4 py-2 outline-none'
          type='text'
          name='search'
          placeholder='Search videos...'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className='border-gray-400 border-solid border-l-0 border rounded-r-full px-4 bg-gray-200 text-center'>
          <Search width={20} height={20} />
        </button>
        <div className='absolute top-12 bg-white rounded-lg right-0 left-0 flex flex-col gap-4 p-4 shadow-lg'>
          <p className='flex items-center gap-4 line-clamp-1 break-all'><SearchIcon size={16}/> Search ResultsSearch ResultsSearch ResultsSearch ResultsSearch ResultsSearch ResultsSearch ResultsSearch ResultsSearch ResultsSearch ResultsSearch ResultsSearch ResultsSearch ResultsSearch Results</p>
          <p>Search Results</p>
          <p>Search Results</p>
          <p>Search Results</p>
          <p>Search Results</p>
          <p>Search Results</p>
          <p>Search Results</p>
          <p>Search Results</p>
          <p>Search Results</p>
        </div>
      </div>
      <UserCircle />
    </div>
  );
};

export default Header;
