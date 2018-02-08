import React  from "react"
import Ripple from "react-material/ui/effect/Ripple"

import classNames from "react-material/ui/view/Button/classNames"

export default ({
    className,
    color = "Blue",
    component = "span",
    Component = component,
    dense,
    disabled,
    type = "flat",
    ...props
}) =>
    <Ripple
        className={
            [
                className,
                classNames.Host,
                disabled ? classNames.Disabled
              :            undefined,
                dense ? classNames.Dense
              :         "",
                type == "flat"   ? classNames.Flat
              : type == "raised" ? classNames.Raised
              :                    undefined,
              classNames[color]
            ].join(" ")
        }
        component={Component}
        disabled={disabled}
        fixed={type == "fab"}
        {...props}
    />
    