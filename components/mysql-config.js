import mysql from 'mysql';
import { uid } from './request-info.js';
import {
  followers_count,
  followers_count_str,
  friends_count,
  statuses_count,
} from './weibo-info.js';
import { details } from './weibo-detail.js';
import { chaohua_info } from './chaohua-info.js';

export const connection = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  database: 'siying',
  password: 'admin123',
});

export const sqlStr = 'INSERT INTO weibo_' + uid + ' SET ?';

export const insert_data = {
  followers_count: followers_count,
  followers_count_str: followers_count_str,
  friends_count: friends_count,
  statuses_count: statuses_count,
  detail1: details[0],
  detail2: details[1],
  chaohua: chaohua_info,
};

console.log(insert_data);
