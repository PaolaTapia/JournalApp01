import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "../../hooks/useForm";
import validator from 'validator';
import { removeError, setError } from '../../actions/ui';
import { useDispatch, useSelector } from 'react-redux';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

  const dispatch = useDispatch();
  const {msgError} = useSelector( state => state.ui ); 
  console.log(msgError);

  
  const [formValues, handleInputChange] = useForm({
    name:'Paola', 
    email: 'mail@gmail.com', 
    password: '123456',
    password2: '123456'
  });

  const { name, email, password, password2 } = formValues;


const handleRegister = (e)=> {
  e.preventDefault(); 
  if(isFormValid()){
    dispatch(startRegisterWithEmailPasswordName(email, password, name)); 
    //removeError(); 
  }
}

const isFormValid = ()=>{

  if(name.trim().length === 0){
    dispatch(setError('Name is required')); 
    return false; 
  } else if(!validator.isEmail(email)){
    dispatch(setError('Email is not valid')); 
    return false; 
  } else if(password!==password2 || password.length < 5){
    dispatch(setError('Password should be at least 6 character and match each other')); 
    return false; 
  }
  //remove del error
  dispatch(removeError()); 
  return true; 
}

     return (
<>
         <h3> Register </h3>

         <form onSubmit={handleRegister}>
           {
             msgError &&
           (
             <div className="auth__alert-error">
              {msgError}
             </div>
           )
           }
         <input 
           type="text" 
           placeholder="Name" 
           name="name"
           className="auth__input" 
           autoComplete="off"
           value={name}
           onChange={handleInputChange}
           />

           <input 
           type="text" 
           placeholder="Email" 
           name="email"
           className="auth__input" 
           autoComplete="off"
           value={email}
           onChange={handleInputChange}
           />

           <input 
           type="password" placeholder="Password" name="password" 
           className="auth__input"
           autoComplete="off"
           value={password}
           onChange={handleInputChange}
           />

          <input 
           type="password" placeholder="Confirm" name="password2" 
           className="auth__input"
           autoComplete="off"
           value={password2}
           onChange={handleInputChange}
           />

           <button
            type="submit"
            className="btn btn-primary btn-block mb-5"
            > Register</button>

           <hr />

           <div>
             <Link
             className="link mt-5"
             to="/auth/login"
             > Already registered?</Link>
           </div>
         </form>
       </>
     )
}
