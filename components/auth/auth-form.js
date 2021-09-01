import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/client';

import Tile from '../ui/Tile';
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
    const router = useRouter();

    function switchAuthModeHandler() {
        setIsLogin((prevState) => !prevState);
    }

    async function submitHandler(event) {

        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = pwInputRef.current.value;

        if(isLogin) {

            const result = await signIn('credentials', { 
                redirect:false,
                email: enteredEmail,
                password: enteredPassword
            });

            if(!result.error) {
                router.replace('/');
            }

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

        <div>
            <section className={classes.loginform}>
                <Tile>
                    <div className={classes.formwrapper}>
                        <h2>{isLogin ? 'Login' : 'Sign-Up'}</h2>
                        <form onSubmit={submitHandler}>
                            <div className={classes.fieldwrapper}>
                                <label htmlFor='email' className={classes.formlabel}>Email</label>
                                <input type='email' id='email' required className={classes.forminput} ref={emailInputRef} />
                            </div>
                            <div className={classes.fieldwrapper}>
                                <label htmlFor='password' className={classes.formlabel}>Password</label>
                                <input type='password' id='password' required className={classes.forminput} ref={pwInputRef} />
                            </div>
                            <div className={classes.fieldwrapper}>
                                <button type='submit' class='standardbtn'>{isLogin ? 'Login' : 'Create Account'}</button>
                            </div>
                            <div className={classes.authmode}>
                                <button type='button' className={`toggle txtbtn`} onClick={switchAuthModeHandler}>
                                    {isLogin? 'Create new Account' : 'Login with existing Account'}
                                </button>
                            </div>
                        </form>
                    </div>
                </Tile>
            </section>
        </div>

    )

}

export default AuthForm;