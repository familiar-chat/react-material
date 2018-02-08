import React  from "react"
import Ripple from "react-material/ui/effect/Ripple"

import classNames from "react-material/ui/view/ToggleButton/classNames"

export default ({
    className,
    disabled,
    selected,
    ...props
}) =>
    <Ripple
        className={
            [
                className,
                classNames.Host,
                disabled ? classNames.Disabled
              :           undefined,
                selected ? classNames.Selected
              :            undefined
            ].join(" ")
        }
        component="span"
        disabled={disabled}
        {...props}
    />
