import dayjs, { ConfigType } from 'dayjs';

export const getTimeAgoString = (timestamp: ConfigType) => {
  const diff = dayjs().diff(Number(timestamp) * 1000, 'second');

  if (diff < 60) {
    return `${diff} second${diff > 1 ? 's' : ''} ago`;
  } else if (diff < 3600) {
    return `${Math.floor(diff / 60)} minute${diff / 60 > 1 ? 's' : ''} ago`;
  } else if (diff < 86400) {
    return `${Math.floor(diff / 3600)} hour${Math.floor(diff / 3600) > 1 ? 's' : ''} ago`;
  } else if (diff < 604800) {
    return `${Math.floor(diff / 86400)} day${Math.floor(diff / 86400) > 1 ? 's' : ''} ago`;
  } else {
    return dayjs(Number(timestamp) * 1000).format('YYYY/MM/DD HH:mm:ss');
  }
};
