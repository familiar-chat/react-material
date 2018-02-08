import React from "react"

import classNames from "react-material/ui/view/ListItemIcon/classNames"

export default ({
    className,
    component = "p",
    Component = component,
    selected,
    ...props
}) =>
    <Component
        {...props}
        className={[className, classNames.Host].join(" ")}
    />
