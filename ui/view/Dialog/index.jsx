import React    from "react"
import ReactDOM from "react-dom"
import Root     from "react-material/ui/control/Root"
import Shadow   from "react-material/ui/effect/Shadow"

import classNames from "react-material/ui/view/Dialog/classNames"

export default props =>
    <Root
        className={props.visible ? classNames.Root : ""}
    >
        <Dialog
            {...props}
        />
    </Root>

let Dialog = class extends React.Component {
    componentWillMount() {
        this.setState({
            onClick: e => {
                let {
                    onCancel = () => undefined
                } = this.props

                if (!ReactDOM.findDOMNode(this).contains(e.target))
                    onCancel()
            },
            size   : undefined
        })
    }

    componentDidMount() {
        let {
            visible
        } = this.props

        if (visible)
            setTimeout(
                () => window.addEventListener("click", this.state.onClick, false),
                1
            )

        let rect = ReactDOM.findDOMNode(this).getBoundingClientRect()

        this.setState({
            size: [
                rect.width,
                rect.height
            ]
        })
    }

    componentWillReceiveProps({
        visible
    }) {
        if (this.props.visible != visible) {
            if (visible)
                setTimeout(
                    () => window.addEventListener("click", this.state.onClick, false),
                    1
                )
            else
                window.removeEventListener("click", this.state.onClick, false)
        }
    }

    componentWillUnmount() {
        if (this.props.visible)
            window.removeEventListener("click", this.state.onClick, false)
    }

    render() {
        let {
            children,
            className,
            onCancel,
            style,
            visible,
            ...props
        } = this.props

        return (
            <Shadow
                blur="20"
                children={(
                    visible         ? children
                  : this.state.size ? undefined
                  :                   children
                )}
                className={
                    [
                        className,
                        classNames.Host,
                        visible            ? classNames.Visible
                      : this.state.size    ? classNames.Hidden
                      :                      undefined
                    ].join(" ")
                }
                depth="0.5"
                offset="7"
                spread="1"
                style={{
                    width    : this.state.size ? this.state.size[0] + "px"
                             :                   undefined,
                    height   : this.state.size ? this.state.size[1] + "px"
                             :                   undefined,
                    transform: (
                      　 !this.state.size ? undefined
                      :                    [
                            "translateX(50vw) translateX(" + -this.state.size[0] / 2 + "px)",
                            visible ? "translateY(50vh) translateY(" + -this.state.size[1] / 2 + "px)"
                          :           "translateY(100vh)"
                        ].join(" ")
                    ),
                    ...style
                }}
                {...props}
            />
        )
    }
}
