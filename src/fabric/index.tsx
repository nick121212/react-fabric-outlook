import { Stylesheet } from "@uifabric/styling/lib";
import { loadTheme } from 'office-ui-fabric-react/lib/Styling';

import "./icons";

import { default as DarkTheme } from "./themes/dark";
import { default as LightTheme } from "./themes/light";

export { Link, LinkGroup, SearchBox, Panel } from "./components";

const style: Stylesheet = Stylesheet.getInstance();

// 手动管理Fabric样式
style.setConfig({
  injectionMode: 0,
  onInsertRule: (rule: string) => {
    const ruleNode: HTMLElement | null = document.getElementById("fabric-rules");

    if (ruleNode) {
      ruleNode.appendChild(document.createTextNode(rule))
    }
  }
});

loadTheme(LightTheme);

export {
  LightTheme,
  DarkTheme
};
