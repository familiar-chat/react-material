import React from "react"

import classNames from "react-material/ui/view/ViewPager/classNames"

export default ({
    children,
    className,
    component = "div",
    Component = component,
    selectedIndex,
    ...props
}) =>
    <Component
        className={[className, classNames.Host].join(" ")}
        {...props}
    >
        {Array.from(React.Children.toArray(children).entries()).map(([i, x]) =>
            React.cloneElement(
                x,
                {
                    style: {
                        left     : -100 * i + "%",
                        transform: "translate3d(" + 100 * (i - selectedIndex) + "%, 0, 0)" ,
                        ...x.props.style
                    }
                }
            )
        )}
    </Component>
