import { useState } from 'react'

const Register = ({ onRegister }) => {

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmedPassword, setConfirmedPassword ] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (!username || !password || !confirmedPassword) {
            alert('Please fill in all fields.');
            return;
        }
        if (password !== confirmedPassword) {
            alert('Passwords must match.');
            return;
        }
        onRegister(username, password);
        setUsername('');
        setPassword('');
        setConfirmedPassword('');
    }

    return (
        <div>
            <form className='register-form' onSubmit={onSubmit}>
                <div className='form-control'>
                    <label>Username</label>
                    <input type='text' placeholder='Enter username' value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className='form-control'>
                    <label>Password</label>
                    <input type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='form-control'>
                    <label>Confirm Password</label>
                    <input type='password' placeholder='Confirm password' value={confirmedPassword} onChange={(e) => setConfirmedPassword(e.target.value)} />
                </div>
                <input type='submit' value='Register' className='btn btn-block' />
            </form>
        </div>
    )
}

export default Register
