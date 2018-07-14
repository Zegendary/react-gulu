import * as React from "react";
import './index.scss'

export interface ButtonProps { text: string; }

export const Button = (props: ButtonProps) => <button className="gulu-button">{props.text}</button>