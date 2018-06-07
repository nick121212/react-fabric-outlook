import schemaFormReact from "fx-schema-form-react";
import Immutable from "immutable";

import { LightTheme } from "../../fabric";
import proxy from "../../modelproxy/proxy";
import { ArrayComponent } from "../components/array";
import { ArrayItemComponent } from "../components/arrayitem";
import { NoneComponent } from "../components/none";

/**
 * 正常的表单配置
 */
export const globalOptions = Immutable.fromJS({
    field: {
        default: {
            temps: ["formItem"],
            hocs: ["utils", "theme", "format", "field", "validate", "array", "temp"],
            widgetHocs: [schemaFormReact.hocFactory.get("data")({
                data: true,
                meta: true,
                metaKeys: ["isLoading", "options", "children"]
            })]
        },
        array: {
            temps: ["card"],
            Root: NoneComponent,
            ArrayFieldComponent: NoneComponent,
            // 这里为array字段添加sort排序功能
            formHocs: [
                schemaFormReact.hocFactory.get("resetKey")({
                    excludeKeys: ["formItemData", "formItemMeta"]
                })
            ],
            formItemHocs: [
            ],
            fieldHocs: [schemaFormReact.hocFactory.get("data")({
                data: true,
                dataLength: true
            })],
            options: Immutable.fromJS({
                temp: {
                    card: {
                        icon: "apps"
                    }
                }
            })
        },
        normal: {
        },
        number: {
            options: Immutable.fromJS({
                widget: {
                    number: {
                        options: {
                            inputProps: {
                                type: "number"
                            }
                        }
                    }
                }
            })
        },
        object: {
            temps: ["card"],
            Root: NoneComponent
        },
        boolean: {
            widget: "checkbox",
            options: Immutable.fromJS({
                temp: {
                    formItem: {
                        showTitle: false
                    }
                }
            })
        }
    },
    temp: {
        card: {
            tempHocs: [schemaFormReact.hocFactory.get("data")({
                meta: true,
                data: true,
                dataLength: true,
                metaKeys: ["collapsing", "errorText", "isValid"]
            })],
            options: {
                elevation: 0,
                raised: false,
                // className: "ml3 mr3"
            }
        },
        formItem: {
            tempHocs: [schemaFormReact.hocFactory.get("data")({
                meta: true,
                metaKeys: ["isLoading", "errorText", "isValid", "dirty"]
            })],
            options: {
                fullWidth: true,
                margin: "normal",
                className: "flex w-auto"
            }
        }
    },
    hoc: {
        data: {
            rootReducerKey: ["schemaForm"]
        },
        array: {
            ArrayComponent,
            ArrayItemComponent
        },
        schemaFormDec: {
            hocIncludeKeys: ["schemaId", "isValid", "data"]
        },
        proxy: {
            proxy
        },
        format: {
            date: {
                widget: "date",
                options: {
                    temp: {
                        formItem: {
                            showTitle: false
                        }
                    }
                }
            },
            time: {
                widget: "time",
                options: {
                    temp: {
                        formItem: {
                            showTitle: false
                        }
                    }
                }
            }
        }
    },
    widget: {
        text: {
            options: {}
        },
        date: {
            options: {}
        },
        datetime: {
            options: {}
        },
        time: {
            options: {}
        },
        select: {
            options: {}
        },
        toggle: {
            options: {
                theme: LightTheme
            }
        },
        checkbox: {
            options: {
                theme: LightTheme
            }
        }
    }
});
