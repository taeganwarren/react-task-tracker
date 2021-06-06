import { useSelector, useDispatch } from 'react-redux';
import { setUsername, setPassword, setConfirmedPassword } from '../redux/registerSlice';

const Register = ({ onRegister }) => {

    const username = useSelector((state) => state.register.username);
    const password = useSelector((state) => state.register.password);
    const confirmedPassword = useSelector((state) => state.register.confirmedPassword);
    const dispatch = useDispatch();

    // On submit
    const onSubmit = (e) => {
        e.preventDefault();
        onRegister(username, password, confirmedPassword);
        dispatch(setUsername(''));
        dispatch(setPassword(''));
        dispatch(setConfirmedPassword(''));
    }

    // Return
    return (
        <div>
            <form className='register-form' onSubmit={onSubmit}>
                <div className='form-control'>
                    <label>Username</label>
                    <input type='text' placeholder='Enter username' value={username} onChange={(e) => dispatch(setUsername(e.target.value))} />
                </div>
                <div className='form-control'>
                    <label>Password</label>
                    <input type='password' placeholder='Enter password' value={password} onChange={(e) => dispatch(setPassword(e.target.value))} />
                </div>
                <div className='form-control'>
                    <label>Confirm Password</label>
                    <input type='password' placeholder='Confirm password' value={confirmedPassword} onChange={(e) => dispatch(setConfirmedPassword(e.target.value))} />
                </div>
                <input type='submit' value='Register' className='btn btn-block' />
            </form>
        </div>
    )
}

export default Register
