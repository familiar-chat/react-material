import React from "react"
import Ripple from "react-material/ui/effect/Ripple"

import classNames from "react-material/ui/view/Radio/classNames"

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
        <div/>
        <Ripple
            className={classNames.Ripple}
            fixed
        />
    </div>
