import React  from "react"
import Ripple from "react-material/ui/effect/Ripple"
import match  from "react-material/util/match"
import {Link} from "react-router-dom"

import classNames from "react-material/ui/view/ListItem/classNames"

export default ({
    className,
    children,
    disabled,
    location,
    to,
    selected = location && match({
        location          : location,
        locationDescriptor: to
    }),
    value,
    ...props
}) =>
    <li
        className={
            [
                className,
                classNames.Host,
                disabled ? classNames.Disabled
              :            undefined,
                selected ? classNames.Selected
              :            undefined
            ].join(" ")
        }
        {...props}
    >
        <Ripple
            children={
                React.Children.toArray(children).map(x =>
                    typeof(x) == "string" ? x
                  : typeof(x) == "number" ? x
                  :                         React.cloneElement(
                        x,
                        {
                            selected: selected,
                        }
                    )
                )
            }
            component={
                disabled ? undefined
              : to       ? Link
              :            undefined
            }
            disabled={disabled}
            to={to}
        />
    </li>
