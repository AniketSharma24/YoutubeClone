import { useSelector } from 'react-redux';
import { formatNumber, getTimeDifference } from '../utils/constants';
import useChannelDetail from '../utils/usChannelDetail';

const VideoCard = ({ detail }) => {
  const channelDetails = useChannelDetail(detail.snippet.channelId);

  const date = getTimeDifference(
    new Date(detail.snippet.publishedAt),
    new Date()
  );

  const formattedNumber = formatNumber(detail.statistics.viewCount);

  const { isOpen } = useSelector((store) => store.sidenav);
  return (
    channelDetails.snippet && (
      <div
        className={`${
          isOpen ? 'w-80' : 'w-96'
        } flex flex-col gap-2 cursor-pointer`}
      >
        <img
          className='rounded-t-xl'
          src={detail.snippet.thumbnails.medium.url}
          alt='video-thumbnail'
        />
        <div className='flex items-start gap-4'>
          <img
            src={channelDetails.snippet.thumbnails.default.url}
            className='w-10 h-10 rounded-full'
            alt='channel-logo'
          />
          <div className='flex flex-col gap-1'>
            <h3
              className='line-clamp-2 font-semibold'
              title={detail.snippet.title}
            >
              {detail.snippet.title}
            </h3>
            <div>
              <p
                className='line-clamp-1 text-sm'
                title={detail.snippet.channelTitle}
              >
                {detail.snippet.channelTitle}
              </p>
              <p className='font-medium text-gray-700 text-sm'>
                <span>{formattedNumber} views</span>
                &nbsp;&bull;&nbsp;
                <span>{date}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default VideoCard;
