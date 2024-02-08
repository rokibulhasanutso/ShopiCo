import { useState } from 'react';
import style from './style/inputs.module.css'
import { RiEyeFill, RiEyeCloseFill } from "react-icons/ri";

const PasswordInput = ({label, name, placeholder, varient, getInput}) => {
    const [passShow, setPassShow] = useState(false)


    return (
        <>
        {
            !varient &&
            <div className={style.wrapper}>
                {
                    label && 
                    <label htmlFor={`password-field`}>
                        {name.charAt(0).toUpperCase() + name.slice(1)}
                    </label>
                }
                <input 
                    type="password"
                    id={`password-fieldd`}
                    name='password'
                    onChange={getInput}
                    placeholder={placeholder}
                    autoComplete='off'
                />
            </div>
        }
        
        {/* for eyecap varitent */}
        {
            varient === 'eyecap' &&
            <div className={style.wrapper}>
                {
                    label && 
                    <label htmlFor={`password-field`}>
                        {name.charAt(0).toUpperCase() + name.slice(1)}
                    </label>
                }
                <div className={style.eyePass}>
                    <input 
                        type={passShow ? 'text' : 'password'}
                        id={`password-field`}
                        name='password'
                        onChange={getInput}
                        placeholder={placeholder}
                        autoComplete='off'
                    />
                    <button onClick={(e) => {e.preventDefault(); setPassShow(!passShow)}}>
                        {
                            passShow 
                            ? <RiEyeFill />
                            : <RiEyeCloseFill/>
                        }
                    </button>
                </div>
            </div>
        }

        {/* for confirm varitent */}
        {
            varient === 'confirm' &&
            <>
            <div className={style.wrapper}>
                <label htmlFor={`password-field`}>Password</label>
                <input 
                    type="password"
                    id={`password-field`}
                    name='password'
                    onChange={getInput}
                    placeholder={placeholder}
                    autoComplete='off'
                />
            </div>

            <div className={style.wrapper}>
                <label htmlFor={`confirm-password-field`}>Confirm Password</label>
                <input 
                    type="password"
                    id={`confirm-password-field`}
                    name='password'
                    onChange={getInput}
                    placeholder={placeholder}
                    autoComplete='off'
                />
            </div>
            </>
        }
    </>
    );
};

PasswordInput.defaultProps = {
    label: true,
    name: 'password field'
}

export default PasswordInput;