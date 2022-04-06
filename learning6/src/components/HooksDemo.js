import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';


const HooksDemo = () => {
    // const [name,setName] = useState('Tejasri');
    const [data, setData] = useState({
        name: 'Sridhar',
        age: 24
    });

    let history = useNavigate();            // instead of useHistory we can use useNavigate()

    // history('/')
    // navigate(`/invoices/${newInvoice.id}`) -- example

    const {name,age} = data;

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    useEffect(()=>{
        fetch('./data.json').then(
            response => response.json()
        ).then(json=>console.log(json.items));
    },[])

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data);
    }

    return (
        <div>
            <div className='mb-3'>
                <Link to='/'>HooksDemo</Link> &nbsp;
                <Link to='classcmp'>ClassCmp</Link>&nbsp;
                <Link to={`/funcmp?name=${name}&age=${age}`}>FunCmp</Link>&nbsp;
            </div>
            <form onSubmit={submitHandler} className='form-group'>
                <div className=' row'>
                    <label className='col-form-label col-sm-2 offset-sm-2' htmlFor="name">Name</label>
                    <div className='col-sm-5'>
                        <input className='form-control col-sm-5' type="text" id="name" name='name' placeholder=' Enter name '
                            onChange={changeHandler}></input><br />
                    </div>
                </div>
                <div className='mb-3 row'>
                    <label className='col-sm-2 offset-sm-2 form-label' htmlFor="age">Age </label>
                    <div className='col-sm-5'>
                    <input className='col-sm-5 form-control' id='age' type="text" name='age' placeholder=' Enter age '
                            onChange={changeHandler} />
                    </div>
                </div>
                <input type='submit' className='btn btn-primary' value='submit' />
            </form>

        </div>
    )
}

export default HooksDemo
