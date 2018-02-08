import React from "react"
import Image from "react-material/ui/view/Image"

import classNames from "react-material/ui/view/ListItemIcon/classNames"

export default ({
    className,
    component = Image,
    Component = component,
    selected,
    ...props
}) =>
    <Component
        className={
            [
                className,
                classNames.Host,
                selected ? classNames.Selected
              :            undefined
            ].join(" ")
        }
        {...props}
    />
