import React        from "react"
import ReactDOM     from "react-dom"
import Shadow       from "react-material/ui/effect/Shadow"
import MaterialIcon from "react-material/ui/view/MaterialIcon"

import classNames from "react-material/ui/view/Search/classNames"

export default class extends React.Component {
    componentWillMount() {
        this.setState({
            focus   : false,
            onScroll: e => {
                this.setState({
                    scrolled: e.currentTarget.scrollTop > 0
                })
            },
            scrolled: false
        })
    }

    componentDidMount() {
        let {
            getScrollable = x => undefined
        } = this.props

        let x = getScrollable(ReactDOM.findDOMNode(this))

        if (x)
            x.addEventListener("scroll", this.state.onScroll, false)
    }

    componentWillUnmount() {
        let {
            getScrollable = x => undefined
        } = this.props

        let x = getScrollable(ReactDOM.findDOMNode(this))

        if (x)
            x.removeEventListener("scroll", this.state.onScroll, false)
    }

    render() {
        let {
            className,
            expandable,
            expand,
            getScrollable,
            hintText,
            name,
            onChange,
            onMouseDown = e => undefined,
            onTouchStart = e => undefined,
            placeholder = hintText,
            readOnly,
            value,
            ...props
        } = this.props

        let onPress = e => {
            e.preventDefault()

            e.currentTarget.children[1].focus()
        }

        let onCancel = e => {
            if (this.state.focus) {
                e.stopPropagation()
                e.currentTarget.children[1].blur()
            }
        }

        return (
            <Shadow
                className={
                    [
                        className,
                        classNames.Host,
                        expandable ? classNames.Expandable
                      :              undefined,
                        expand ? classNames.Expand
                      :          undefined,
                        this.state.focus ? classNames.Focus
                      :                    undefined
                    ].join(" ")
                }
                offset={
                    this.state.scrolled ? 3
                  : this.state.focus    ? 3
                  :                       2
                }
                onMouseDown={e => {
                    onMouseDown(e)
                    onPress(e)
                }}
                onTouchStart={e => {
                    onTouchStart(e)
                    onPress(e)
                }}
                {...props}
            >
                <MaterialIcon
                    onMouseDown={onCancel}
                    onTouchStart={onCancel}
                >
                    <span>search</span>
                    <span>arrow_back</span>
                </MaterialIcon>
                <input
                    name={name}
                    onBlur={e => {
                        this.setState({
                            focus: false
                        })
                    }}
                    onChange={onChange}
                    onFocus={e => {
                        this.setState({
                            focus: true
                        })
                    }}
                    placeholder={placeholder}
                    readOnly={readOnly}
                    value={value}
                />
            </Shadow>
        )
    }
}
