import fetch from 'node-fetch';

const response = await fetch(
  'https://m.weibo.cn/api/container/getIndex?extparam=%E9%BE%9A%E4%BF%8A&containerid=100808b503e94e4f2f272c6e1cf79b59c41085&luicode=10000011&lfid=100103type%3D401%26t%3D10%26q%3D%E9%BE%9A%E4%BF%8A'
).then((response) => response.json());

export const chaohua_info = response.data.pageInfo.desc_more[0];
