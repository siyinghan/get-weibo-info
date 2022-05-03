import fetch from 'node-fetch';
import { uid, cookie } from './request-info.js';

const response = await fetch('https://weibo.com/ajax/profile/info?uid=' + uid, {
  method: 'GET',
  headers: {
    Cookie: cookie,
  },
}).then((response) => response.json());

export const followers_count = response.data.user.followers_count;
export const followers_count_str = response.data.user.followers_count_str;
export const friends_count = response.data.user.friends_count;
export const statuses_count = response.data.user.statuses_count;
