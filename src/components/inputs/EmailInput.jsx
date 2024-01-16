import style from './style/inputs.module.css'

const EmailInput = ({label, name, placeholder, getInput}) => {
    return (
        <div className={style.wrapper}>
            {
                label && 
                <label htmlFor={`email-field`}>
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                </label>
            }
            <input 
                type="email"
                id={`email-field`}
                name='email'
                onChange={getInput}
                placeholder={placeholder}
            />
        </div>
    );
};

EmailInput.defaultProps = {
    label: true,
    name: 'Email field'
}

export default EmailInput;