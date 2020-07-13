import React, {Component} from 'react';

interface FormTestState {
    desc:string,
    ename:string,
    errors:{
      eNameError:string
    }
}

class FormTest extends Component<{},FormTestState> {
    constructor(props:any){
        super(props);
        this.state={
          desc:'',
          ename:'',
          errors:{
              eNameError:''
          }

        };
        this.handleChange = this.handleChange.bind(this);
        this.validateOnChange = this.validateOnChange.bind(this);
        this.validateName = this.validateName.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleChange(event:any){
        let name = event.target.name;
        let val = event.target.value;
        let errors = this.state.errors;
        this.validateOnChange(name,val,errors);
        this.setState({errors,'ename':val});
    }

    submitForm(event:any) {
        event.preventDefault();
        this.validateForm();
        let formValid:boolean=true;
        for(let s of Object.values(this.state.errors)){
            console.log("s is "+s);
            if(s.length>1) {
                formValid=false;
                break;
            }

        }
        if(formValid) {
            alert("Form is valid")
        }else {
            alert("Form is not valid")
        }
        return formValid;
    }
    validateOnChange(name:any,val:any,errors:any){
        console.log(name,val);
        if(val===''){
            errors.eNameError="name required"
        }else{
            errors.eNameError=''
        }

    }
    validateName(errors:any){
        errors.eNameError= this.state.ename==''?"name required":'';
    }
    validateForm(){
        let formErrors = this.state.errors;
      this.validateName(formErrors);
      this.setState({errors:formErrors});

    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <label htmlFor="ename">Employee Name:</label>
                    <input type="text" name="ename" value={this.state.ename} onChange={this.handleChange}/>
                    <label>{this.state.errors.eNameError?"name required":""}</label>
                    {console.log(this.state.errors)}
                    {/*<textarea name="desc" value={this.state.desc} onChange={this.handleChange}></textarea>*/}
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }


}

export default FormTest;