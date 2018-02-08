import React from "react"

import classNames from "react-material/ui/view/DialogBody/classNames"

export default ({
    className,
    component = "div",
    Component = component,
    ...props
}) =>
    <Component
        className={[className, classNames.Host].join(" ")}
        {...props}
    />
