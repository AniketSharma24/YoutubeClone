import React from 'react';
import TagsList from './TagsList';
import VideoContainer from './VideoContainer';
import { useDispatch } from 'react-redux';
import { resetSelectedVideo } from '../utils/selectedVideoSlice';

const Main = () => {
  const dispatch = useDispatch();
  dispatch(resetSelectedVideo());
  
  return (
    <div className='pl-6 pr-4 w-full mb-10'>
      <TagsList />
      <VideoContainer />
    </div>
  );
};

export default Main;
