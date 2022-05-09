import fetch from 'node-fetch';
import { weibo_uid, items, weibo_cookie_incog } from './request-info.js';

// get weibo info response
const info_response = await fetch(
  'https://weibo.com/ajax/profile/info?uid=' + weibo_uid,
  {
    method: 'GET',
    headers: {
      Cookie: weibo_cookie_incog,
    },
  }
).then((response) => response.json());

// get weibo detail response
const detail_response = await fetch(
  'https://weibo.com/ajax/profile/detail?uid=' + weibo_uid,
  {
    method: 'GET',
    headers: {
      Cookie: weibo_cookie_incog,
    },
  }
).then((response) => response.json());

// get chaohua response
const chaohua_response = await fetch(
  'https://m.weibo.cn/api/container/getIndex?extparam=%E9%BE%9A%E4%BF%8A&containerid=100808b503e94e4f2f272c6e1cf79b59c41085&luicode=10000011&lfid=100103type%3D401%26t%3D10%26q%3D%E9%BE%9A%E4%BF%8A'
).then((response) => response.json());

export let weibo_info = {
  weibo_follower: info_response.data.user.followers_count,
  weibo_friend: info_response.data.user.friends_count,
  weibo_count: info_response.data.user.statuses_count,
  chaohua_read: chaohua_response.data.pageInfo.desc_more[0].split('\u3000')[0],
  chaohua_count: chaohua_response.data.pageInfo.total,
  chaohua_follower:
    chaohua_response.data.pageInfo.desc_more[0].split('\u3000')[2],
};

detail_response.data.label_desc.forEach((detail) => {
  if (detail['name'].indexOf('歌') !== -1) {
    weibo_info['weibo_song'] = detail['name'];
  } else if (detail['name'].indexOf('昨日') !== -1) {
    weibo_info['weibo_yesterday'] = detail['name'];
  } else if (detail['name'].indexOf('视频') !== -1) {
    weibo_info['weibo_video'] = detail['name'];
  }
});
