import List  from "react-material/ui/view/List"
import React from "react"

import classNames from "react-material/ui/view/BreadcrumbList/classNames"

export default ({
    className,
    ...props
}) =>
    <List
        className={[className, classNames.Host].join(" ")}
        component="ol"
        itemScope
        itemType="http://schema.org/BreadcrumbList"
        orientation="horizontal"
        {...props}
    />
