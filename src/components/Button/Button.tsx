import * as React from "react";
import './Button.scss'

export interface ButtonProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children:  any
}

export default class Button extends React.Component<ButtonProps,any>{
    constructor(props: ButtonProps){
        super(props)
    }

    render(){
        return (
            <button className="gulu-button" onClick={this.props.onClick}>{this.props.children}</button>
        )
    }
}
