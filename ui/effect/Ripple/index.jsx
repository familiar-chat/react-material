import React from "react"

import classNames from "react-material/ui/effect/Ripple/classNames"

export default class extends React.Component {
    componentWillMount() {
        this.setState({
            ripples: []
        })
    }

    render() {
        let {
            children,
            className,
            component = "div",
            Component = component,
            rippleComponent = "span",
            RippleComponent = rippleComponent,
            disabled,
            fixed,
            onClick = e => undefined,
            ...props
        } = this.props

        return (
            <Component
                className={
                    [
                        className,
                        classNames.Host,
                        disabled ? classNames.Disabled
                      :            undefined
                    ].join(" ")
                }
                disabled={disabled}
                onClick={e => {
                    onClick(e)

                    if (disabled)
                        return

                    let rect = e.currentTarget.getBoundingClientRect()

                    if (fixed) {
                        let radius = Math.min(rect.width, rect.height) / 2

                        this.setState({
                            ripples: this.state.ripples.concat({
                                id      : e.timeStamp,
                                opacity : 1,
                                position: [
                                    rect.width  / 2 - radius,
                                    rect.height / 2 - radius
                                ],
                                radius  : radius
                            })
                        })
                    } else {
                        let radius = Math.max(rect.width, rect.height)

                        this.setState({
                            ripples: this.state.ripples.concat({
                                id      : e.timeStamp,
                                opacity : 1,
                                position: [
                                    e.clientX - rect.left - radius,
                                    e.clientY - rect.top  - radius
                                ],
                                radius  : radius
                            })
                        })
                    }
                }}
                {...props}
            >
                {children}
                {this.state.ripples.map(({id, position, opacity, radius}) =>
                    <RippleComponent
                        className={classNames.Ripple}
                        key={id}
                        onAnimationEnd={() => {
                            this.setState({
                                ripples: this.state.ripples.filter(x => x.id != id)
                            })
                        }}
                        style={{
                            left  : position[0] + "px",
                            top   : position[1] + "px",
                            width : radius * 2  + "px",
                            height: radius * 2  + "px"
                        }}
                    />
                )}
            </Component>
        )
    }
}
