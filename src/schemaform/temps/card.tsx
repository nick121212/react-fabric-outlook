// import schemaFormReact from "fx-schema-form-react";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { ArrayHocOutProps } from "fx-schema-form-react/libs/hocs/array";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import React, { PureComponent } from "react";

// const { schemaFormTypes } = schemaFormReact;

export interface IProps extends DefaultProps, UtilsHocOutProps, ArrayHocOutProps {
}

export const tempKey = "card";
export class Temp extends PureComponent<IProps> {
  public render(): any {
    const { children } = this.props;
    // const tempOptions = getOptions(this.props, schemaFormTypes.template, tempKey);
    // const { isValid = true, errorText = "", collapsing = false } = formItemMeta ? formItemMeta.toJS() : {};

    // if (!uiSchema) {
    //   return null;
    // }

    return (
      <div className="bb b--light-gray">
        {children}
      </div>
    );
  }
}

export default {
  [tempKey]: Temp
};
