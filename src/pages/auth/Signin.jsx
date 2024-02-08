import { useState } from 'react';
import style from './container/auth.module.css'
import EmailInput from '../../components/inputs/EmailInput';
import PasswordInput from '../../components/inputs/PasswordInput';
import SigninWithGoogle from './SigninWithGoogle';
import { Link } from 'react-router-dom';
import Logo from '../../components/logo/Logo';

const Signin = () => {
    const [formData, setFromData] = useState({})

    const getInput = (e) => {
        const {name, value} = e.target

        setFromData({
            ...formData,
            [name]: value
        })
    }

    const formSubmit = (e) => {
        e.preventDefault()
        e.stopPropagation()

        console.log(formData)
    }

    return (
        <div className={style.layout}>
            <div className='mb-7 sm:mb-14'>
                <Logo iconClass={'sm:w-24 w-[72px]'} textClass={'sm:text-[38.4px] text-[28.8px]'}/>
            </div>

            <div className={style.wrapper}>
                <div className={style.contentHead}>
                    <h2>Signin your Shopping Explore</h2>
                    <p>Enter your details below</p>
                </div>
                <form onSubmit={formSubmit} noValidate>
                    <EmailInput getInput={getInput} name={'Email address'} />
                    <PasswordInput getInput={getInput} varient={'eyecap'} name={'password'} />

                    <Link 
                        to={'/auth/passwordreset'}
                        className='mb-4 block text-end px-2 text-rose-500 hover:underline' 
                    >
                        Forget Password?
                    </Link>

                    <button type='submit' className={style.submissionButton}>Signin</button>
                </form>

                <SigninWithGoogle/>

                <div className='text-gray-500 mt-8 text-center'>
                    I have no account? 
                    <Link 
                        to='/auth/signup' 
                        className='text-rose-500 hover:text-rose-600 hover:underline font-semibold ms-1'
                    >
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Signin;