

import Immutable from "immutable";
import { Reducer } from "redux";
import { createAction, createReducer, SimpleActionCreator } from "redux-act";

export interface IConfirmReducerModel {
  confirm: boolean;
  item: any;
}

/**
 * 确认框的reducer
 * actions
 */
export class ConfirmReducer {
  private confirmAction: SimpleActionCreator<IConfirmReducerModel> = createAction<IConfirmReducerModel>("确认消息");

  /**
   * 构造函数
   * @param initialState state的初始值
   */
  constructor(protected initialState: IConfirmReducerModel = {
    confirm: false,
    item: null
  }) { }

  /**
   * 返回当前的actions
   */
  public get actions() {
    return {
      confirm: this.confirmAction
    };
  }

  /**
   * 返回当前的reducers
   */
  public get reducer(): Reducer<Immutable.Map<string, any>> {
    return createReducer<Immutable.Map<string, any>>({
      [this.confirmAction as any]: (state: Immutable.Map<string, any>,
        { confirm, item }: IConfirmReducerModel) => {
        return state.merge({
          confirm,
          item
        });
      }
    }, Immutable.Record(this.initialState)());
  }
}
