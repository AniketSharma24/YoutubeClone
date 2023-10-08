import React, { useEffect, useState } from 'react';
import { YOUTUBE_API_URL } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedVideo } from '../utils/selectedVideoSlice';
import { closeMenu } from '../utils/sidenavSlice';

const VideoContainer = () => {
  const [videoList, setVideoList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    getVideoList();
  }, []);

  const getVideoList = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const response = await data.json();
    setVideoList(response.items);
  };

  const getVideoDetails = (video) => {
    dispatch(setSelectedVideo(video));
    dispatch(closeMenu());
  };

  return (
    videoList.length && (
      <div className='flex flex-wrap justify-evenly gap-y-8'>
        {videoList?.map((video) => {
          return (
            <Link
              key={video.id}
              to={'/watch?vi=' + video.id}
              onClick={() => getVideoDetails(video)}
            >
              <VideoCard detail={video} />
            </Link>
          );
        })}
      </div>
    )
  );
};

export default VideoContainer;
