import React    from "react"
import ReactDOM from "react-dom"
import Shadow   from "react-material/ui/effect/Shadow"

import classNames from "react-material/ui/view/FloatingActionButton/classNames"

export default class extends React.Component {
    componentWillMount() {
        this.setState({
            rect: undefined
        })
    }

    componentDidMount() {
        let rect = ReactDOM.findDOMNode(this).parentElement.getBoundingClientRect()

        this.setState({
            rect: rect
        })
    }

    componentWillReceiveProps({
        fullscreen
    }) {
        if (fullscreen != this.props.fullscreen) {
            let rect = ReactDOM.findDOMNode(this).parentElement.getBoundingClientRect()

            this.setState({
                rect: rect
            })
        }
    }

    render() {
        let {
            className,
            fullscreen,
            style,
            ...props
        } = this.props

        return (
            <Shadow
                blur="12"
                className={
                    [
                        className,
                        classNames.Host,
                        fullscreen ? classNames.FullScreen
                      :              undefined
                    ].join(" ")
                }
                depth="0.5"
                offset="4"
                style={
                    fullscreen && this.state.rect ? {
                        top   : this.state.rect.top    + "px",
                        left  : this.state.rect.left   + "px",
                        width : this.state.rect.width  + "px",
                        height: this.state.rect.height + "px",
                        ...style
                    }
                  :                                  style
                }
                {...props}
            />
        )
    }
}
