import React, {Component} from 'react';
import './App.css';
import Hello from "./hello/Hello";
import Confirm from "./components/Confirm/Confirm";
import FormTest from "./components/forms/FormTest";

class App extends Component {
    private handleCancelConfirmClick = () => {
        console.log("Cancel clicked");
    };

    private handleOkConfirmClick = () => {
        console.log("Ok clicked");
    };
    render() {
        return (
            <div>
                {/*<Confirm*/}
                    {/*title={"title"} content={"Hello"}*/}
                    {/*cancelCaption={"Cancel"} okCaption={"ok"}*/}
                    {/*onOkClick={this.handleOkConfirmClick}*/}
                    {/*onCancelClick={this.handleCancelConfirmClick}*/}
                    {/*open={true}*/}
                {/*/>*/}
                <FormTest/>
            </div>
        );
    }
}

export default App;
