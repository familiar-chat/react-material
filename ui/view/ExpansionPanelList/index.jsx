import React    from "react"
import ReactDOM from "react-dom"
import List     from "react-material/ui/view/List"

import classNames from "react-material/ui/view/ExpansionPanelList/classNames"

export default class extends React.Component {
    componentWillMount() {
        this.setState({
            labelWidth: undefined
        })
    }

    componentDidMount() {
        let e = ReactDOM.findDOMNode(this)
        this.setState({
            labelWidth: Array.from(e.parentNode.querySelectorAll(
                "." + classNames.Host + " > * > :nth-child(1) > :nth-child(1)"
            ))
                .map(x => x.getBoundingClientRect().width)
                .reduce((x, y) => Math.max(x, y), 0)
        })
    }

    render() {
        let {
            children,
            className,
            onSelected = ({index}) => undefined,
            onUnselected = ({index}) => undefined,
            selectedIndexes = [],
            ...props
        } = this.props

        return (
            <List
                className={
                    [
                        className,
                        classNames.Host
                    ].join(" ")
                }
                {...props}
            >
                {
                    Array.from(React.Children.toArray(children).entries()).map(([i, x]) =>
                        React.cloneElement(
                            x,
                            {
                                labelWidth: this.state.labelWidth,
                                onClick   : e => {
                                    let {
                                        disabled,
                                        onClick = e => undefined
                                    } = x.props

                                    onClick(e)

                                    if (!disabled && e.currentTarget.children[0].contains(e.target)) {
                                        if (selectedIndexes.includes(i))
                                            onUnselected({
                                                index: i
                                            })
                                        else
                                            onSelected({
                                                index: i
                                            })
                                    }
                                },
                                selected  : selectedIndexes.includes(i),
                                ...x.props
                            }
                        )
                    )
                }
            </List>
        )
    }
}
