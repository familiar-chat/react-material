import React        from "react"
import ReactDOM     from "react-dom"
import Ripple       from "react-material/ui/effect/Ripple"
import Shadow       from "react-material/ui/effect/Shadow"
import MaterialIcon from "react-material/ui/view/MaterialIcon"

import classNames from "react-material/ui/view/ExpansionPanel/classNames"

export default class extends React.Component {
    componentWillMount() {
        this.setState({
            contentSize: undefined
        })
    }

    componentDidMount() {
        let e = ReactDOM.findDOMNode(this)

        let contentRect = e.children[1].getBoundingClientRect()

        this.setState({
            contentSize: [
                contentRect.width,
                contentRect.height
            ]
        })
    }

    render() {
        let {
            children,
            className,
            disabled,
            hintText,
            labelText,
            labelWidth,
            location,
            selected,
            value,
            ...props
        } = this.props

        return (
            <Shadow
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
                component="li"
                disabled={disabled}
                offset="2"
                spread="0"
                {...props}
            >
                <Ripple
                    disabled={disabled}
                >
                    <div
                        style={{
                            minWidth: labelWidth ? labelWidth + "px"
                                    :              undefined
                        }}
                    >
                        {labelText}
                    </div>
                    <div>
                        {
                            value == undefined ? hintText
                          : selected           ? hintText
                          :                      value
                        }
                    </div>
                    <MaterialIcon
                        className={classNames.Icon}
                    >
                        {
                            disabled ? undefined
                          :            "keyboard_arrow_down"
                        }
                    </MaterialIcon>
                </Ripple>
                <div
                    children={(
                        selected               ? children
                      : this.state.contentSize ? undefined
                      :                          children
                    )}
                    style={{
                        height: !this.state.contentSize ? undefined
                              : disabled                ? "0"
                              : selected                ? this.state.contentSize[1] + "px"
                              :                           "0"
                    }}
                />
            </Shadow>
        )
    }
}
