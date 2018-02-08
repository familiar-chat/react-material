import React from "react"

import classNames from "react-material/ui/view/Slider/classNames"

export default ({
    enabled,
    className,
    ...props
}) =>
    <div
        {...props}
        className={[
            className,
            classNames.Host,
            enabled && classNames.Selected
        ].join(" ")}
    >
        <div
            className={classNames.Border}
        />
    </div>
