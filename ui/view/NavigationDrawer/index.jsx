import React    from "react"
import ReactDOM from "react-dom"
import Shadow   from "react-material/ui/effect/Shadow"

import classNames from "react-material/ui/view/NavigationDrawer/classNames"

export default class extends React.Component {
    componentWillMount() {
        this.setState({
            size: undefined
        })
    }

    componentDidMount() {
        let rect = ReactDOM.findDOMNode(this).getBoundingClientRect()

        this.setState({
            size: [
                rect.width,
                rect.height
            ]
        })
    }
    componentWillReceiveProps(props) {
        let rect = ReactDOM.findDOMNode(this).getBoundingClientRect()

        this.setState({
            size: [
                rect.width,
                rect.height
            ]
        })
    }

    render() {
        let {
            className,
            style,
            visible,
            ...props
        } = this.props

        return (
            <Shadow
                {...props}
                blur="4"
                className={
                    [
                        className,
                        classNames.Host,
                        visible ? classNames.Visible
                      :           classNames.Hidden
                    ].join(" ")
                }
                component="nav"
                depth="0.2"
                offset="1"
                position="right"
                spread="2"
                style={{
                    marginLeft: visible         ? 0
                              : this.state.size ? "-" + this.state.size[0] + "px"
                              :                   undefined,
                    ...style
                }}
            />
        )
    }
}