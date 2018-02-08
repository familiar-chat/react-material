import React  from "react"
import Toolbar from "react-material/ui/view/Toolbar"

import classNames from "react-material/ui/view/AppBar/classNames"

export default ({
    className,
    ...props
}) =>
    <Toolbar
        className={[className, classNames.Host].join(" ")}
        {...props}
    />
