import React  from "react"
import Ripple from "react-material/ui/effect/Ripple"

import classNames from "react-material/ui/view/IconToggle/classNames"

export default ({
    className,
    disabled,
    ...props
}) =>
    <Ripple
        className={
            [
                className,
                classNames.Host,
                disabled ? classNames.Disabled
              :            undefined
            ].join(" ")
        }
        component="span"
        disabled={disabled}
        fixed
        {...props}
    />
