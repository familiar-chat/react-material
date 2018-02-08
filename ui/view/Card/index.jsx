import Shadow     from "react-material/ui/effect/Shadow"
import classNames from "react-material/ui/view/Card/classNames"
import React      from "react"

export default ({
    className,
    component = "div",
    raised,
    ...props
}) =>
    <Shadow
        className={[className, classNames.Host].join(" ")}
        offset={
            raised ? "8"
          :          "2"
        }
        {...props}
    />
