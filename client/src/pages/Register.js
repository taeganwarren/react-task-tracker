import { useSelector, useDispatch } from 'react-redux';
import { setUsername, setPassword, setConfirmedPassword } from '../redux/registerSlice';
import ErrorMessage from '../components/ErrorMessage';
import Header from "../components/Header";

const Register = ({ onRegister }) => {

    const username = useSelector((state) => state.register.username);
    const password = useSelector((state) => state.register.password);
    const confirmedPassword = useSelector((state) => state.register.confirmedPassword);
    const usernameError = useSelector((state) => state.register.usernameError);
    const passwordError = useSelector((state) => state.register.passwordError);
    const mismatchedPasswordsError = useSelector((state) => state.register.mismatchedPasswordsError);
    const dispatch = useDispatch();

    // On submit
    const onSubmit = (e) => {
        e.preventDefault();
        onRegister(username, password, confirmedPassword);
    }

    // Return
    return (
        <>
            <Header title="Register" />
            <div>
                <form className='register-form' onSubmit={onSubmit}>
                    <div className='form-control'>
                        <label>Username</label>
                        <input type='text' placeholder='Enter username' value={username} onChange={(e) => dispatch(setUsername(e.target.value))} />
                        {usernameError && <ErrorMessage message='Username must only contains letters and numbers.' />}
                    </div>
                    <div className='form-control'>
                        <label>Password</label>
                        <input type='password' placeholder='Enter password' value={password} onChange={(e) => dispatch(setPassword(e.target.value))} />
                        {passwordError && <ErrorMessage message='Password must be at least 8 characters and contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 symbol.' />}
                    </div>
                    <div className='form-control'>
                        <label>Confirm Password</label>
                        <input type='password' placeholder='Confirm password' value={confirmedPassword} onChange={(e) => dispatch(setConfirmedPassword(e.target.value))} />
                        {mismatchedPasswordsError && <ErrorMessage message='Passwords must match.' />}
                    </div>
                    <input type='submit' value='Register' className='btn btn-block' />
                </form>
            </div>
        </>
    )
}

export default Register
