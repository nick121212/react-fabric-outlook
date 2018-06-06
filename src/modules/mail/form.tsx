import { UiSchema } from "fx-schema-form-core";
import schemaFormReact from "fx-schema-form-react";
import { fromJS } from "immutable";
import { Button, PrimaryButton } from "office-ui-fabric-react/lib/Button";
// import { SchemaFormProps } from "fx-schema-form-react/libs/libs/dec";
import React from "react";
import { compose, defaultProps } from "recompose";

import { curAjv } from "../../schemaform";
import { globalOptions } from "../../schemaform/options/default";


const { schemaFormDec, SchemaForm } = schemaFormReact;


@(compose(
  defaultProps({
    ajv: curAjv,
    schemaId: "dashboard",
    reducerKey: "schemaForm",
    formKey: "dashboard",
    shouldResetForm: true,
    initData: {
      habit: [],
      favoriteColor: "Monday",
      sex: "15",
      born: ""
    }
  }),
  // hocFactory.get("asyncSchema"),
  schemaFormDec({
    rootReducerKey: ["schemaForm"],
    parentKeys: ["dashboard"]
  })) as any)
export class DashboardTestComponent extends React.PureComponent<any, any> {

  public render() {
    const { parentKeys, schemaId, validateAll, data } = this.props;

    if (!this.props.root) {
      return null;
    }

    return <>
      <div className="b f2 mb3">
        Schema Form Example
      </div>

      <div className="ba b--light-gray pa3 mb3">
        {JSON.stringify(data)}
      </div>

      <hr className="mb3" />

      <SchemaForm
        schemaId={schemaId}
        uiSchemas={[{
          key: "",
          temps: ["block"],
          options: fromJS({
            temp: {
              block: {
                title: "日历外观",
                description: ""
              }
            }
          }),
          children: [{
            key: "favoriteColor",
            widget: "dropdown",
            title: "显示每周的第一天为",
            options: fromJS({
              widget: {
                dropdown: {
                  options: {
                    options: [{
                      key: "Sunday",
                      text: "星期日"
                    }, {
                      key: "Monday",
                      text: "星期一"
                    }, {
                      key: "Tuesday",
                      text: "星期二"
                    }, {
                      key: "Wednesday",
                      text: "星期三"
                    }, {
                      key: "Thursday",
                      text: "星期四"
                    }, {
                      key: "Friday",
                      text: "星期五"
                    }, {
                      key: "Saturday",
                      text: "星期六"
                    }]
                  }
                }
              }
            })
          } as UiSchema, {
            key: "sex",
            widget: "choiseGroup",
            title: "显示小时数",
            options: fromJS({
              widget: {
                choiseGroup: {
                  options: {
                    options: [{
                      key: "15",
                      text: "以15分钟为增量"
                    }, {
                      key: "30",
                      text: "以30分钟为增量"
                    }]
                  }
                }
              }
            })
          } as UiSchema, {
            key: "habit",
            field: "none",
            temps: ["formItem"],
            widget: "checkboxs",
            title: "工作周显示方式",
            options: fromJS({
              widget: {
                checkboxs: {
                  options: {
                    options: [{
                      key: "Sunday",
                      text: "周日"
                    }, {
                      key: "Monday",
                      text: "周一"
                    }, {
                      key: "Tuesday",
                      text: "周二"
                    }, {
                      key: "Wednesday",
                      text: "周三"
                    }, {
                      key: "Thursday",
                      text: "周四"
                    }, {
                      key: "Friday",
                      text: "周五"
                    }, {
                      key: "Saturday",
                      text: "周六"
                    }]
                  }
                }
              }
            })
          } as UiSchema, {
            key: "born",
            title: "开始日期",
            widget: "date"
          } as UiSchema, {
            key: "isEighteen",
            title: "显示周数",
            widget: "checkbox",
            options: fromJS({
              temp: {
                formItem: {
                  showTitle: false
                }
              }
            })
          } as UiSchema]
        }]}
        parentKeys={parentKeys}
        globalOptions={globalOptions}
        ajv={curAjv} >

        <PrimaryButton className="mt3" onClick={() => {
          if (validateAll) {
            validateAll();
          }
        }}>保存设置</PrimaryButton>

        <Button className=" ml2 mt3">放弃</Button>

      </SchemaForm>
    </>;
  }
}
