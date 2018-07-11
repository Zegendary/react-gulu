import * as React from "react";

export interface ButtonProps { text: string; }

export const Button = (props: ButtonProps) => <button>{props.text}</button>