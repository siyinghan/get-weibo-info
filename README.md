# Get Weibo Info

## Getting Started

Run `npm install` to install dependencies.

Run `node index.js` to execute the code.

Information from Weibo will be stored in the MySQL table.

## MySQL table setting

| Column              | Information                           |
| ------------------- | ------------------------------------- |
| id                  | INT PK NN UQ AI                       |
| create_time         | TIMESTAMP CURRENT_TIMESTAMP (Default) |
| followers_count     | INT                                   |
| followers_count_str | VARCHAR(45)                           |
| friends_count       | INT                                   |
| statuses_count      | INT                                   |
| detail1             | VARCHAR(45)                           |
| detail2             | VARCHAR(45)                           |
| chaohua             | VARCHAR(45)                           |

## Example

| id  | create_time         | followers_count | followers_count_str | friends_count | statuses_count | detail1                                    | detail2                | chaohua                                   |
| --- | ------------------- | --------------- | ------------------- | ------------- | -------------- | ------------------------------------------ | ---------------------- | ----------------------------------------- |
| 1   | 2022-04-30 23:57:51 | 19462042        | 1946.2 万           | 254           | 736            | 昨日发博 2，阅读人数 100 万+，互动数 80 万 | 视频累计播放量 7.55 亿 | 阅读 739 亿　帖子 375.6 万　粉丝 532.3 万 |

## Cookie

Open [weibo](https://weibo.com) in incognito mode. Inspect any user homepage, click `detail?uid=` and copy the cookie.
