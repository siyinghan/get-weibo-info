import fetch from 'node-fetch';
import { uid, cookie } from './request-info.js';

const response = await fetch(
  'https://weibo.com/ajax/profile/detail?uid=' + uid,
  {
    method: 'GET',
    headers: {
      Cookie: cookie,
    },
  }
).then((response) => response.json());

export let details = [];

response.data.label_desc.forEach((detail) => {
  if (
    detail['name'].indexOf('阅读') !== -1 ||
    detail['name'].indexOf('播放') !== -1
  ) {
    details.push(detail['name']);
  }
});
