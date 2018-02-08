import React from "react"

import classNames from "react-material/ui/view/Switch/classNames"

export default ({
    enabled = false,
    ...props
}) =>
    <div
        className={
            [
                classNames.Host,
                enabled ? classNames.Enable
              :           classNames.Disable
            ].join(" ")
        }
        {...props}
    >
        <span
            className={classNames.Slider}
        >
            <span
                className={classNames.Circle}
            />
        </span>
    </div>
