import { Link } from 'react-router-dom';
import shopicoLogo from '../../assets/images/shopico-logo.png'

const Logo = ({iconClass, textClass}) => {
    return (
        <Link to={'/'}>
            <div className='flex items-center gap-2 select-none'>
                <div><img className={`${iconClass}`} src={shopicoLogo} alt="Logo" /></div>
                <p className={`font-opensans font-semibold ${textClass}`}>
                    <span className='text-[#0074ff]'>Shopi</span>
                    <span className='text-[#ffb300]'>Co</span>
                </p>
            </div>
        </Link>
    );
};

Logo.defaultProps = {
    iconClass: "w-16",
    textClass: "text-[25.6px]"
}

export default Logo;