import React        from "react"
import LinearLayout from "react-material/ui/view/LinearLayout"

import classNames from "react-material/ui/view/DialogFooter/classNames"

export default ({
    className,
    ...props
}) =>
    <LinearLayout
        className={[className, classNames.Host].join(" ")}
        component="div"
        orientation="horizontal"
        {...props}
    />
