import React from 'react';
import './Form.css';
import {useState} from 'react';
import { onLoadAction } from './Action/action';
import {connect } from 'react-redux';

const Form = (props) => {
    const [form, setForm] = useState({
        name: '',
        password: '',
        email: '',
        phone: '',
    });




    const handleChange = (e) => {
        return setForm({...form, [e.target.name] : e.target.value});

    }
    const handleSubmit = (e) => {
        e.preventDefault(); 
        props.loadContact(form);
    }
    return (
        <div className="details">
               <h2>CONTACT DETAILS</h2>
               <form onSubmit={handleSubmit} className="forms">
                  <div>
                      <input type="text" name="name" id="name" placeholder = "Name" onChange={handleChange}></input>
                  </div>
                  <div>
                      <input type="text" name="email" id="email" placeholder = "Email" onChange={handleChange}></input>
                  </div>
                  <div>
                      <input type="password" name="password" id="password" placeholder="Password"
                      onChange={handleChange}></input>
                  </div>
                  <div>
                      <input type="number" name="phone" id="phone" placeholder = "Phone"
                      onChange={handleChange}></input>
                  </div>
                  <div>
                      <button >Submit</button>
                  </div>
               </form>
               <div className="table-wrapper">
                    <table>
                            <tr>
                                <th>Name</th>
                                <th>Mobile</th>
                                <th>Date of Birth</th>
                                <th>Email</th>
                            </tr>
                        
                        
                    {props.form.map((u, index) =>
                    
                    
                        <tr key = {index}>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>{u.password}</td>
                            <td>{u.phone}</td>
                        </tr>

                    )}  

                </table>
                
            </div>
               
                
        </div>
    )

}

const mapStateToProps = state => ({
    form: state.form.form           
})

const mapDispatchToProps = (dispatch) => ({
    loadContact: (payload) => dispatch(onLoadAction(payload))
})


export default connect(mapStateToProps, mapDispatchToProps)(Form);