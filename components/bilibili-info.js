import fetch from 'node-fetch';
import { bili_channel_id } from './request-info.js';

const response = await fetch(
  'https://api.bilibili.com/x/web-interface/web/channel/detail?channel_id=' +
    bili_channel_id
).then((response) => response.json());

export const bili_channel = {
  archive_count: response.data.archive_count,
  view_count: response.data.view_count,
  feature_count: response.data.featured_count,
  subscription: response.data.subscribed_count,
};
