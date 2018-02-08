import React from "react"
import List  from "react-material/ui/view/List"
import match from "react-material/util/match"

import classNames from "react-material/ui/view/TabBar/classNames"

export default class extends React.Component {
    componentWillMount() {
        this.setState({
            left : -1,
            width: 0
        })
    }

    render() {
        let {
            children,
            className,
            location,
            selectedIndex = Math.max(
                0,
                React.Children.toArray(children).findIndex(x => match({
                    location: location,
                    locationDescriptor: x.props.to
                }))
            ),
            ...props
        } = this.props

        return (
            <div
                className={[className, classNames.Host].join(" ")}
                ref={x => {
                    if (x && selectedIndex >= 0) {
                        let parentRect = x.getBoundingClientRect()
                        let rect = x
                            .children[0]
                            .children[selectedIndex]
                            .getBoundingClientRect()

                        if ((rect.left - parentRect.left) != this.state.left) {
                            this.setState({
                                left : rect.left - parentRect.left,
                                width: rect.width
                            })
                        }
                    }
                }}
                {...props}
            >
                <List
                    orientation="horizontal"
                >
                    {Array.from(React.Children.toArray(children).entries()).map(([i, x]) =>
                        React.cloneElement(
                            x,
                            {
                                selected: i == selectedIndex
                            }
                        )
                    )}
                </List>
                <div
                    className={classNames.Indicator}
                    style={{
                        transform: "translateX(" + this.state.left + "px) scaleX(" + this.state.width + ")"
                    }}
                />
            </div>
        )
    }
}
