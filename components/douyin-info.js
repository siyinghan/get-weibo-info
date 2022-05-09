import fetch from 'node-fetch';
import { douyin_cid } from './request-info.js';

const response = await fetch(
  'https://www.iesdouyin.com/web/api/v2/challenge/info/?ch_id=' + douyin_cid
).then((response) => response.json());

export const douyin_ch = {
  user_count: response.ch_info.user_count,
  view_count: response.ch_info.view_count,
};
