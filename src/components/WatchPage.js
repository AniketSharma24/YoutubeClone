import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import useChannelDetail from '../utils/usChannelDetail';
import { formatNumber } from '../utils/constants';

const WatchPage = () => {
  const [queryPrams] = useSearchParams();
  console.log(queryPrams.get('vi'));

  const videoToWatch = queryPrams.get('vi');

  const { video } = useSelector((store) => {
    console.log(store);
    return store.selectedVideo;
  });
  const channelDetail = useChannelDetail(video.snippet.channelId);

  const subscriberCount = 0

  console.log(channelDetail);

  console.log(video);
  return (
    <div className='px-4 py-8'>
      <iframe
        width='1120'
        height='600'
        src={`https://www.youtube.com/embed/${videoToWatch}`}
        title='null'
      ></iframe>
      <h2 className='font-medium text-xl py-2 line-clamp-1'>
        {video.snippet.title}
      </h2>
      <div>
        <img
          src={channelDetail.snippet.thumbnails.default.url}
          alt='channel-logo'
        />
        <p>
          <h2>{channelDetail.snippet.title}</h2>
          <p>{subscriberCount}</p>
        </p>
      </div>
    </div>
  );
};

export default WatchPage;
