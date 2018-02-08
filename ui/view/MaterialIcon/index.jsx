import React from "react"

import classNames from "react-material/ui/view/MaterialIcon/classNames"

export default ({
    className,
    component = "span",
    Component = component,
    ...props
}) =>
    <Component
        className={[className, classNames.Host].join(" ")}
        {...props}
    />
