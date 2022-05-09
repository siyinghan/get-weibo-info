import mysql from 'mysql';
import { weibo_info } from './weibo-info.js';
import { bili_channel } from './bilibili-info.js';
import { douyin_ch } from './douyin-info.js';

export const connection = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  database: 'siying',
  password: 'admin123',
});

export const sqlStr = 'INSERT INTO test2 SET ?';

export const insert_data = {
  // 微博粉丝数
  weibo_follower: weibo_info['weibo_follower'],
  // 微博关注数
  weibo_friend: weibo_info['weibo_friend'],
  // 总微博数
  weibo_count: weibo_info['weibo_count'],
  weibo_song: weibo_info['weibo_song'],
  weibo_yesterday: weibo_info['weibo_yesterday'],
  weibo_video: weibo_info['weibo_video'],
  // 微博超话阅读量
  chaohua_read: weibo_info['chaohua_read'],
  // 微博超话帖子数
  chaohua_count: weibo_info['chaohua_count'],
  // 微博超话粉丝数
  chaohua_follower: weibo_info['chaohua_follower'],
  bili_channel_archive_count: bili_channel['archive_count'],
  bili_channel_view_count: bili_channel['view_count'],
  bili_channel_feature_count: bili_channel['feature_count'],
  bili_channel_subscription: bili_channel['subscription'],
  douyin_ch_user_count: douyin_ch['user_count'],
  douyin_ch_view_count: douyin_ch['view_count'],
};

console.log(insert_data);
