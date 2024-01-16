import { Link } from 'react-router-dom';
import shopicoLogo from '../../assets/images/shopico-logo.png'

const Logo = ({size}) => {
    return (
        <Link to={'/'}>
            <div className='flex items-center gap-2 select-none'>
                <div><img width={size+'px'} src={shopicoLogo} alt="Logo" /></div>
                <p className={`font-opensans font-semibold`} style={{fontSize: size*.4}}>
                    <span className='text-[#0074ff]'>Shopi</span>
                    <span className='text-[#ffb300]'>Co</span>
                </p>
            </div>
        </Link>
    );
};

Logo.defaultProps = {
    size: 200
}

export default Logo;