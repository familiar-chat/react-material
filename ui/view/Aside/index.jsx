import React from "react"

import classNames from "react-material/ui/view/Aside/classNames"

export default ({
    className,
    component = "aside",
    Component = component,
    type = "info",
    ...props
}) =>
    <Component
        className={
            [
                className,
                classNames.Host,
                type == "info"    ? classNames.Info
              : type == "note"    ? classNames.Note
              : type == "code"    ? classNames.Code
              : type == "warning" ? classNames.Warning
              : type == "error"   ? classNames.Error
              :                     undefined,
            ].join(" ")
        }
        {...props}
    />
