import React from "react"
import List  from "react-material/ui/view/List"
import Popup from "react-material/ui/view/Popup"

import classNames from "react-material/ui/view/Menu/classNames"

export default ({
    className,
    ...props
}) =>
    <Popup
        className={[className, classNames.Host].join(" ")}
        component={List}
        {...props}
    />
