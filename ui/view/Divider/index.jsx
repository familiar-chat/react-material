import React from "react"

import classNames from "react-material/ui/view/Divider/classNames"

export default ({
    className,
    ...props
}) =>
    <div
        {...props}
        className={[className, classNames.Host].join(" ")}
    />
