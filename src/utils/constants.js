export const API_KEY = 'AIzaSyBw9NJn___gCsXId0dsFpCUCyEy8LyVxEY';

export const YOUTUBE_API_URL =
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=48&chart=mostPopular&regionCode=IN&key=' +
  API_KEY;

export const CATEGORY_LIST_API =
  'https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&hl=en&regionCode=IN&key=' +
  API_KEY;

export const CHANNEL_DETAIL_API =
  'https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=' +
  API_KEY;

export const SEARCH_SUGGESTIONS_API =
  'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=' +
  API_KEY;

export const getTimeDifference = (uploadDate, currentDate) => {
  const oneMinute = 60 * 1000; // One minute in milliseconds
  const oneHour = oneMinute * 60; // One hour in milliseconds
  const oneDay = oneHour * 24; // One day in milliseconds
  const oneMonth = oneDay * 30; // Assuming 30 days in a month (approximation)
  const oneYear = oneDay * 365; // Assuming 365 days in a year (approximation)

  const timeDiff = currentDate - uploadDate;

  if (timeDiff < oneMinute) {
    return 'Just now';
  } else if (timeDiff < oneHour) {
    const minutes = Math.floor(timeDiff / oneMinute);
    return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
  } else if (timeDiff < oneDay) {
    const hours = Math.floor(timeDiff / oneHour);
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  } else if (timeDiff < oneMonth) {
    const days = Math.floor(timeDiff / oneDay);
    return `${days} ${days === 1 ? 'day' : 'days'} ago`;
  } else if (timeDiff < oneYear) {
    const months = Math.floor(timeDiff / oneMonth);
    return `${months} ${months === 1 ? 'month' : 'months'} ago`;
  } else {
    const years = Math.floor(timeDiff / oneYear);
    return `${years} ${years === 1 ? 'year' : 'years'} ago`;
  }
};

export const formatNumber = (number) => {
  const formatter = new Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: 1,
  });

  const formattedNumber = formatter.format(number);
  return formattedNumber;
};
