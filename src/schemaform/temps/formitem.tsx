// import schemaFormReact from "fx-schema-form-react";
import classNames from "classnames";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { ArrayHocOutProps } from "fx-schema-form-react/libs/hocs/array";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { schemaFormTypes } from "fx-schema-form-react/libs/models";
// import { schemaFormTypes } from "fx-schema-form-react/libs/models";
import { fromJS } from "immutable";
import { Label } from "office-ui-fabric-react/lib/Label";
import React, { PureComponent } from "react";

export interface IProps extends DefaultProps, UtilsHocOutProps, ArrayHocOutProps {
}

export const tempKey = "formItem";
export class Temp extends PureComponent<IProps> {
  public render(): any {
    const { children, uiSchema, getOptions, getTitle, formItemMeta = fromJS({}) } = this.props;
    const tempOptions = getOptions(this.props, schemaFormTypes.template, tempKey);
    const { isValid = true, errorText = "" } = formItemMeta.toJS();

    if (!uiSchema) {
      return null;
    }

    return (
      <div className={classNames("mb3", tempOptions.className, { "error": !isValid })}>
        {tempOptions.showTitle !== false ?
          <Label className={classNames("f6 mv1 fw4", { "red": !isValid })}>
            {getTitle(this.props)}:</Label>
          : null}

        {children}

        {
          !isValid ? <span className="dib f7 red mv1">
            {errorText}
          </span> : null
        }

      </div >
    );
  }
}

export default {
  [tempKey]: Temp
};
