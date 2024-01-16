import style from './style/inputs.module.css'

const TextInput = ({label, name, placeholder, getInput}) => {
    return (
        <div className={style.wrapper}>
            {
                label && 
                <label htmlFor={`${name.split(' ').join('-').toLowerCase()}-field`}>
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                </label>
            }
            <input 
                type="text"
                id={`${name.split(' ').join('-').toLowerCase()}-field`}
                name={name.split(' ').join('').toLowerCase() || 'text'}
                onChange={getInput}
                placeholder={placeholder}
            />
        </div>
    );
};

TextInput.defaultProps = {
    label: true,
    name: 'text field'
}

export default TextInput;