import Immutable from "immutable";
import { routerMiddleware } from "react-router-redux";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import reduxPromise from "redux-promise";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";

import proxy from "../modelproxy/proxy";
import proxyMid from "./proxy.mid";

/**
 * 创建logger中间件
 */
const logger = createLogger({
    collapsed: true,
    duration: true,
    stateTransformer: (state: Immutable.Map<string, any>) => {
        return state.toJS();
    }
});

/**
 * 创建saga中间件
 */
export const sagaMiddleware: SagaMiddleware<any> = createSagaMiddleware();

/**
 * 导出默认方法，这里需要一个history：History
 */
export default (history: any) => applyMiddleware(
    routerMiddleware(history),
    proxyMid({ proxy }),
    sagaMiddleware,
    reduxPromise,
    logger
)(createStore);
