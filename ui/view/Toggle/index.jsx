import React from "react"

import classNames from "react-material/ui/view/Toggle/classNames"

export default ({
    component = "span",
    Component = component,
    checked,
    disabled,
    ...props
}) =>
    <Component
        className={
            [
                classNames.Host,
                checked ? classNames.Checked
              :          undefined,
                disabled ? classNames.Disabled
              :            undefined
            ].join(" ")
        }
        {...props}
    />
