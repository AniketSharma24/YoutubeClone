import { useEffect, useState } from 'react';
import { CHANNEL_DETAIL_API } from './constants';

const useChannelDetail = (id) => {
  const [channelInfo, setChannelInfo] = useState({});

  useEffect(() => {
    getChannelDetails();
  }, []);

  const getChannelDetails = async () => {
    const data = await fetch(CHANNEL_DETAIL_API + '&id=' + id);
    const response = await data.json();
    setChannelInfo(response.items[0]);
  };

  return channelInfo;
};

export default useChannelDetail;
