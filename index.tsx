import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Button} from "./components";


class Index extends React.Component{
    click(){
        console.log('点击按钮');
    }
    render(){
        return(
            <Button onClick={this.click}>按钮</Button>
        )
    }
}

ReactDOM.render(<Index/>, document.getElementById("root") as HTMLElement);