import axios from 'axios';

const KEY = 'AIzaSyAMomfYJYS3TlL0HqNFNHxi9DqQBKlSL7Y';

//AIzaSyBXAyimeyDQaq0xckMpjEG4NzYGJR_XTbg

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});