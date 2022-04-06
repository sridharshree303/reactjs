import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Register = () => {
    const [data, setData] = useState({
        name: " ",
        email: " ",
        password: " ",
        confirmpassword: " "
    });

    const {name,email,password,confirmpassword} = data;

    const changeHandler = (e) =>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        if(name.length <=4){
            alert('Username should atleast 4 characters')
        }else if(password !== confirmpassword){
            alert(' passwords are not matched ')
        }else{
            console.log(data);
        } 

        emailjs.sendForm('service_rstjezg', 'template_a0wqx3a', e.target, 'ePGaacHOijY1szPoV')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();

    }
    return (
        <div >
            <center>
            <h3 className='display-4 m-5'>Register Form</h3>
            <form className="form row" onSubmit={submitHandler}>
                <div className='row form-group mb-3 '>
                    <label className=' col-sm-2 m-1 form-label'  htmlFor="name">Name : </label>
                    <div className='col-sm-3'>
                         <input className='form-control' type="text" name="name" id="name" onChange={changeHandler}/>
                    </div>
                </div>
                <div className='row form-group mb-3 '>
                    <label className=' col-sm-2 m-1 form-label'  htmlFor="email">Email : </label>
                    <div className='col-sm-3'>
                         <input className='form-control' type="text" name="email" id="email" onChange={changeHandler}/>
                    </div>
                </div>
                <div className='row form-group mb-3 '>
                    <label className=' col-sm-2 m-1 form-label'  htmlFor="password">Password : </label>
                    <div className='col-sm-3'>
                         <input className='form-control' type="password" name="password" id="password" onChange={changeHandler} />
                    </div>
                </div>
                <div className='row form-group mb-3 '>
                    <label className=' col-sm-2 m-1 form-label'  htmlFor="confirmpassword">Confirm Password : </label>
                    <div className='col-sm-3'>
                         <input className='form-control' type="password" name="confirmpassword" id="confirmpassword" onChange={changeHandler} />
                    </div>
                </div>
                <div className='row form-group mb-3 '>
                    <input className='btn btn-primary col-1 offset-3' type="submit" value="register"/>
                </div>
            </form>
            </center>
         
        </div>
    )
}

export default Register
