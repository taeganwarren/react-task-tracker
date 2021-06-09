import { useSelector, useDispatch } from 'react-redux';
import { setUsername, setPassword } from '../redux/loginSlice';
import Header from "../components/Header";

const Login = ({ onLogin }) => {

    const username = useSelector((state) => state.login.username);
    const password = useSelector((state) => state.login.password);
    const dispatch = useDispatch();

    // On Submit
    const onSubmit = (e) => {
        e.preventDefault();
        onLogin(username, password);
        dispatch(setUsername(''));
        dispatch(setPassword(''));
    }

    // Return
    return (
        <>
            <Header title="Login" />
            <div>
                <form className='login-form' onSubmit={onSubmit}>
                    <div className='form-control'>
                        <label>Username</label>
                        <input type='text' placeholder='Enter username' value={username} onChange={(e) => dispatch(setUsername(e.target.value))} />
                    </div>
                    <div className='form-control'>
                        <label>Password</label>
                        <input type='password' placeholder='Enter password' value={password} onChange={(e) => dispatch(setPassword(e.target.value))} />
                    </div>
                    <input type='submit' value='Login' className='btn btn-block' />
                </form>
            </div>
        </>
    )
}

export default Login
