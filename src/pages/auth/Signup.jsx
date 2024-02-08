import { useState } from 'react';
import style from './container/auth.module.css'
import Logo from '../../components/logo/Logo';
import TextInput from '../../components/inputs/TextInput';
import EmailInput from '../../components/inputs/EmailInput';
import PasswordInput from '../../components/inputs/PasswordInput';
import SigninWithGoogle from './SigninWithGoogle';
import { Link } from 'react-router-dom';

const Signup = () => {
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
    }

    return (
        <div className={style.layout}>
            <div className='mb-7 sm:mb-14'>
                <Logo iconClass={'sm:w-24 w-[72px]'} textClass={'sm:text-[38.4px] text-[28.8px]'}/>
            </div>

            <div className={style.wrapper}>
                <div className={style.contentHead}>
                    <h2>Create an account</h2>
                    <p>Enter your details below</p>
                </div>
                <form onSubmit={formSubmit} noValidate>
                    <TextInput getInput={getInput} name={'Full Name'} />
                    <EmailInput getInput={getInput} name={'Email address'} />
                    <PasswordInput varient={'confirm'} name={'password'} />
                    <button className={style.submissionButton}>Create account</button>
                </form>

                <SigninWithGoogle/>

                <div className='text-gray-500 mt-8 text-center'>
                    Already have account? 
                    <Link 
                        to='/auth/signin' 
                        className='text-rose-500 hover:text-rose-600 hover:underline font-semibold ms-1'
                    >
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;