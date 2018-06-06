import { ModelProxy } from 'modelproxy';
import { InterfaceFactory } from 'modelproxy/out/libs/interface.factory';
import { IInterfaceModel } from 'modelproxy/out/models/interface';

import { fetchEngine, fetchSchemaEngine } from './engines';


/**
 * 接口的配置以及初始化
 * 这里有fetch和jsonp的接口转发器
 */
const proxy = new ModelProxy();
// let state = 'dev';

// if (__PROD__) {
//     state = 'prd';
// }

// if (__STAG__) {
//     state = 'stg';
// }

proxy.loadConfig({
  "key": "test",
  "title": "p-uc",
  // tslint:disable-next-line:object-literal-sort-keys
  "engine": "default",
  "mockDir": "/mocks/",
  "states": {
    "dev": "http://www.baidu.com"
  },
  "state": "dev",
  "interfaces": [{
    "key": "article",
    "title": "文章接口",
    // tslint:disable-next-line:object-literal-sort-keys
    "method": "GET",
    "path": "/articles"
  }, {
    "key": "user",
    "title": "用户接口",
    // tslint:disable-next-line:object-literal-sort-keys
    "method": "GET",
    "path": "/users",
    "engine": "default"
  }]
}, {});

proxy.loadConfig({
  "engine": "json",
  "interfaces": [{
    "key": "schema",
    "method": "get",
    "path": "/static/schemas/:id",
    "title": "调用本地的schema文件"
  }, {
    "key": "echarts",
    "method": "get",
    "path": "/static/echarts/:id",
    "title": "调用本地的echart配置文件"
  }],
  "key": "sf",
  "state": "dev",
  "states": {
    "dev": ""
  },
  "title": "schema的获取接口"
}, {});

// 加载引擎
proxy.addEngines({
  fetch: fetchEngine,
  schema: fetchSchemaEngine
});

// 获取接口的命名空间
const schemaNs = proxy.getNs("sf") as InterfaceFactory;
// 导出获取json的接口
export const getSchema = schemaNs.get("schema") as IInterfaceModel;

export default proxy;
