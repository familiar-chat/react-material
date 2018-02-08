import React  from "react"
import Card   from "react-material/ui/view/Card"
import {Link} from "react-router-dom"

import classNames from "react-material/ui/view/LinkCard/classNames"

export default ({
    className,
    ...props
}) =>
    <Card
        className={[className, classNames.Host].join(" ")}
        component={Link}
        {...props}
    />
