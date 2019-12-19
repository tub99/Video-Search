import axios from 'axios';
const KEY = 'AIzaSyCy-BSvyc0FCjVnqBNfwPEpakdH0rAWDEo'; //'AIzaSyBYMLhRzDtwb3fpSlVuPrqoao2VMdalfiI';
export const defaultParams = {
    part: 'snippet',
    maxResults: 10,
    key: KEY
}

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/'
})