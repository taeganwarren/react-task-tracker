import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; 2021</p>
            <div>
                <Link to='/about'>About</Link>
            </div>
            <div>
                <Link to='/login'>Login</Link>
            </div>
            <div>
                <Link to='/register'>Register</Link>
            </div>
        </footer>
    )
}

export default Footer
