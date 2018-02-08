import React  from "react"
import Avatar from "react-material/ui/view/Avatar"

import classNames from "react-material/ui/view/ListItemAvatar/classNames"

export default ({
    className,
    selected,
    ...props
}) =>
    <Avatar
        className={[className, classNames.Host].join(" ")}
        {...props}
    />
