---
title: 镜像站API使用说明
icon: toolbox
index: false
---

[CRSim下载镜像站](http://crsim.com.cn) 提供了一些API接口，方便用户查询镜像站的资源信息。

API接口地址：`http://crsim.com.cn/api/[ 接口名称 ].php`

# 接口列表及格式

## 1. version

- 功能简介 ：查询版本对应的详细信息。
- 请求方式 ：`GET`
- 响应格式 ：`json`
- 请求参数 ：

| 参数名 | 是否必填 | 说明 |
| --- | --- | --- |
|`ver`| 否 | 版本号，如填写则为返回版本号为 `ver` 的版本的详细信息，不填写则返回最新版本的详细信息。 |

- 响应内容 ：

| 参数名 | 说明 |
| --- | --- |
|`status_code`| 状态码 |
|`message`| 请求状态信息 |
|`ver`| 版本号 |
|`download_file`| 下载地址 |
|`file_md5`| 下载文件的正确 `md5` 值 |
|`file_sha256`| 下载文件的正确 `sha256` 值 |
|`log`| 上一版本到这一版本的更新日志。 |

- 状态码说明 ：

| 状态码 | `message` 值 | 说明 |
| --- | --- | --- |
|`200`| `OK` | 请求成功 |
|`404`| `"ver" not found` | 请求的版本不存在 |
|`500`| `JSON file format error, please contact website administrator` | 服务器JSON解析失败，请联系网站管理人员。 |

- 示例请求1: `http://crsim.com.cn/api/version.php`
- 示例响应1:
```json
{
  "status_code": "200",
  "message": "OK",
  "ver": "2.2.0.0",
  "download_file": "crsim.com.cn/file/CRSim-release-2.2.0.0.zip",
  "file_md5": "db6d8153f22bb18c68d54f7ede2cde70",
  "file_sha256": "9d9da3e6a8caf2c18ca256e8e10ba1e2257b707460d00d2d70153c844cd339e6",
  "log": "## What's Changed\r\n* feat: 样式搜索 by @denglihong2007 in https://github.com/denglihong2007/CRSim/pull/98\r\n* fix: 筛选后无法复原 by @wxl0430 in https://github.com/denglihong2007/CRSim/pull/99\r\n* chore: 优化项目文件结构 by @denglihong2007 in https://github.com/denglihong2007/CRSim/pull/100\r\n* feat: 添加12306模拟认证失败提示 by @denglihong2007 in https://github.com/denglihong2007/CRSim/pull/101\r\n* feat: 添加列车已到达状态 by @denglihong2007 in https://github.com/denglihong2007/CRSim/pull/102\r\n* feat: 添加淄博站廊桥看板 by @wxl0430 in https://github.com/denglihong2007/CRSim/pull/105\r\n* feat: 添加大庆东站廊桥屏和北京站地道屏 by @wxl0430 in https://github.com/denglihong2007/CRSim/pull/107\r\n* chore: 优化项目结构 by @denglihong2007 in https://github.com/denglihong2007/CRSim/pull/109\r\n* chore: 更正淄博廊桥样式错别字 by @wxl0430 in https://github.com/denglihong2007/CRSim/pull/110\r\n* feat: 添加作者搜索功能 by @wxl0430 in https://github.com/denglihong2007/CRSim/pull/112\r\n* chore: 更正淄博检票口状态栏文字 by @wxl0430 in https://github.com/denglihong2007/CRSim/pull/114\r\n* feat: 添加大庆东站站台屏和哈尔滨西站站台屏 by @wxl0430 in https://github.com/denglihong2007/CRSim/pull/117\r\n* fix: 统一预览图片为4:3 by @denglihong2007 in https://github.com/denglihong2007/CRSim/pull/118\r\n* fix: 广元站主要看板无法启动 by @denglihong2007 in https://github.com/denglihong2007/CRSim/pull/120\r\n* 2.2.0 by @denglihong2007 in https://github.com/denglihong2007/CRSim/pull/129\r\n\r\n\r\n**Full Changelog**: https://github.com/denglihong2007/CRSim/compare/v2.1.4.0...v2.2.0.0"
}
```
- 示例请求2: `http://crsim.com.cn/api/version.php?ver=2.1.4.0`
- 示例响应2:
```json
{
  "status_code": "200",
  "message": "OK",
  "ver": "2.1.4.0",
  "download_file": "crsim.com.cn/file/CRSim-release-2.1.4.0.zip",
  "file_md5": "f9915b92d73c7bf0de14e34e85cddfaf",
  "file_sha256": "783b6f691e0dcb3d059c59800065c12f9e6cc5efced8fc7897d5c5a0530ee133",
  "log": "## What's Changed\r\n* chore: 更新用户密钥文档地址 by @denglihong2007 in https://github.com/denglihong2007/CRSim/pull/79\r\n* chore: 更正哈尔滨样式错别字 by @denglihong2007 in https://github.com/denglihong2007/CRSim/pull/84\r\n* feat: 更加详细的错误提示 by @denglihong2007 in https://github.com/denglihong2007/CRSim/pull/85\r\n* feat: 新增绵阳站站台看板 by @denglihong2007 in https://github.com/denglihong2007/CRSim/pull/87\r\n* fix: 绵阳站站台看板宽度问题 by @denglihong2007 in https://github.com/denglihong2007/CRSim/pull/91\r\n* feat: 添加淄博站站台看板 by @wxl0430 in https://github.com/denglihong2007/CRSim/pull/92\r\n* fix: 站台车厢位置提示文本错误 by @denglihong2007 in https://github.com/denglihong2007/CRSim/pull/94\r\n* feat: 添加福州南站检票口看板 by @denglihong2007 in https://github.com/denglihong2007/CRSim/pull/95\r\n* feat: 添加徐州地铁站台看板 by @denglihong2007 in https://github.com/denglihong2007/CRSim/pull/96\r\n* chore: 修正版本号 by @denglihong2007 in https://github.com/denglihong2007/CRSim/pull/97\r\n\r\n\r\n**Full Changelog**: https://github.com/denglihong2007/CRSim/compare/v2.1.3.0...v2.1.4.0"
}
```

## 2. versionlist

- 功能简介 ：查询版本列表。
- 请求方式 ：`GET`
- 响应格式 ：`json`
- 请求参数 ：无

- 响应内容 ：

| 参数名 | 说明 |
| --- | --- |
|`status_code`| 状态码 |
|`message`| 请求状态信息 |
|`versionlist`| 版本列表，从最新版本开始倒序排列 |

- 状态码说明 ：

| 状态码 | `message` 值 | 说明 |
| --- | --- | --- |
|`200`| `OK` | 请求成功 |
|`500`| `JSON file format error, please contact website administrator` | 服务器JSON解析失败，请联系网站管理人员。 |

- 示例请求1: `http://crsim.com.cn/api/versionlist.php`
- 示例响应1:
```json
{
  "status_code": "200",
  "message": "OK",
  "versionlist": [
    "2.2.0.0",
    "2.1.4.0",
    "2.1.3.0",
    "2.1.2.0",
    "2.1.1.0",
    "2.1.0.3",
    "2.0.1.0",
    "1.2.7.1",
    "1.2.7.0",
    "1.2.6.0",
    "1.2.5.0",
    "1.2.4.0",
    "1.2.3.3",
    "1.2.3.1"
  ]
}
```
::: tip 提示
- 本文档所有 `json` 响应体均已被手动格式化
- 如需申请添加其他 `api` 请加 QQ 群：972024237 (暗号`114514`)，并说明您的需求（注意**不要@群和管理员**）
:::