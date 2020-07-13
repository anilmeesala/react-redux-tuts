import React, {Component} from 'react';
import "./Confirm.css";

interface IProps {
    title: string;
    content: string;
    cancelCaption?: "Cancel",
    okCaption?: "ok"
    onCancelClick:()=>void
    onOkClick:()=>void
    open: boolean;
}
interface IState {
    confirmOpen: boolean;
}
class Confirm extends Component<IProps,IState> {

    static defaultProps = {
        msg1: 'Hello everyone!'
    };

    constructor(props:IProps){
        super(props);
        this.setState( (prevstate) =>{
            if (prevstate.confirmOpen){
               return {confirmOpen:true}
            }
            return {confirmOpen:true}
        });
    }
    private handleCancelClick = () => {
        this.props.onCancelClick();
    };

    private handleOkClick = () => {
        this.props.onOkClick();
    };

    render() {
        return (

           <div>
            {/*<div*/}
                {/*className={*/}
                    {/*this.props.open ? "confirm-wrapper confirm-visible" : "confirm-wrapper"*/}
                {/*}>*/}
                {/*test*/}
            {/*</div>*/}
            <div className="confirm-title-container">
                <span>{this.props.title}</span>
            </div>
                <div className="confirm-content-container">
                    <p>{this.props.content}</p>
                </div>

                <div className="confirm-buttons-container">
                <button className="confirm-cancel" onClick={this.handleCancelClick}>
                    {this.props.cancelCaption}
                </button>
                <button className="confirm-ok" onClick={this.handleOkClick}>
                    {this.props.okCaption}
                </button>
            </div>
            </div>

        );
    }
}

export default Confirm;