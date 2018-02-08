import React    from "react"
import ListItem from "react-material/ui/view/ListItem"

import classNames from "react-material/ui/view/Tab/classNames"

export default ({
    className,
    selected,
    ...props
}) =>
    <ListItem
        className={
            [
                className,
                classNames.Host,
                selected ? classNames.Selected
              :            undefined
            ].join(" ")
        }
        {...props}
    />
