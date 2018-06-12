import schemaFormReact from "fx-schema-form-react";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { Button } from "office-ui-fabric-react/lib/Button";
import React from "react";
import { compose } from "recompose";

const { hocFactory } = schemaFormReact;
/**
 * 数组HOC中用到的操作按钮组件
 */
@(compose(
  hocFactory.get("validate")(),
  hocFactory.get("array")()
) as any)
export class ArrayItemComponent extends React.PureComponent<DefaultProps & any> {
  private removeItem: any;
  // private moveTo: any;

  constructor(props: DefaultProps & any) {
      super(props);
  }

  public render() {
      // const { addItem } = this.props;

      this.removeItem = () => {
          this.props.removeItem(this.props.parentKeys, this.props.getPathKeys(this.props.uiSchema.keys, "../"), this.props.arrayIndex);
      };
      // this.moveTo = () => {
      //     this.props.moveItem(this.props.parentKeys, this.props.getPathKeys(this.props.uiSchema.keys, "../"), this.props.arrayIndex, 0);
      // };

      return (
          <Button title="删除项" onClick={this.removeItem}>
              删除
          </Button>
      );
  }
}
