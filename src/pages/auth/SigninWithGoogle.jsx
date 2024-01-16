import style from './container/auth.module.css'
import googleImg from '../../assets/images/google.png'

const SigninWithGoogle = () => {
    return (
        <button className={style.signinGoogleButton}>
            <div><img src={googleImg} width={'22px'} height={'22px'} alt="Google Icon" /></div>
            <span>Sign Up with Google</span>
        </button>
    );
};

export default SigninWithGoogle;