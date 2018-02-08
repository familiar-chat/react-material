import React from "react"

import classNames from "react-material/ui/view/FlexibleSpace/classNames"

export default ({
    className,
    component = "div",
    Compoenent = component,
    ...props
}) =>
    <Compoenent
        className={[className, classNames.Host].join(" ")}
        {...props}
    />
