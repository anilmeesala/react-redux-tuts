import React, {Component} from 'react';

interface HelloProps {
    msg:string;
    onOkClick:()=>void;
    onCancelClick:()=>void;
}
class Hello extends Component<HelloProps> {
    private handleClick():void{
        console.log("hello");
    }
    render() {
        return (
            <div>
                {this.props.msg}
                <button onClick={this.handleClick}>Hello</button>
            </div>

        );
    }
}

export default Hello;