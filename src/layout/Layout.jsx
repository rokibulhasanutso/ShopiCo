
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
const layout = ({children}) => {
    return (
        <>
            <Navbar/>
            {children}
            <Footer/>
        </>
    );
};

export default layout;