import { useState, useRef } from 'react';
import classes from './auth-form.module.css';

async function createUser(email, password) {
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong!');
    }
  
    return data;
  }

function AuthForm() {

    const emailInputRef = useRef();
    const pwInputRef = useRef();

    const [isLogin, setIsLogin] = useState(true);

    function switchAuthModeHandler() {
        setIsLogin((prevState) => !prevState);
    }

    async function submitHandler(event) {

        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        console.log(enteredEmail);
        const enteredPassword = pwInputRef.current.value;
        console.log(enteredPassword);

        if(isLogin) {
            // Authenticate the User
        } else {
            try {
                const result = await createUser(enteredEmail,enteredPassword);
                console.log(result);
            } catch(error) {
                console.log(error);
            }
        }
    }

    return(

        <section>
            <h2>{isLogin ? 'Login' : 'Sign-Up'}</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' required ref={emailInputRef} />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' required ref={pwInputRef} />
                </div>
                <div>
                    <button>{isLogin ? 'Login' : 'Create Account'}</button>
                    <button type='button' className={classes.toggle} onClick={switchAuthModeHandler}>
                        {isLogin? 'Create new Account' : 'Login with existing Account'}
                    </button>
                </div>
            </form>
        </section>

    )

}

export default AuthForm;