import React from "react"

import classNames from "react-material/ui/view/ListItemTextArea/classNames"

export default ({
    className,
    component = "div",
    Component = component,
    selected,
    ...props
}) =>
    <Component
        className={[className, classNames.Host].join(" ")}
        {...props}
    />
