import { useState } from 'react'

const Login = ({ onLogin }) => {

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (!username || !password) {
            alert('Please fill in all fields.');
            return;
        }
        onLogin(username, password);
        setUsername('');
        setPassword('');
    }

    return (
        <div>
            <form className='login-form' onSubmit={onSubmit}>
                <div className='form-control'>
                    <label>Username</label>
                    <input type='text' placeholder='Enter username' value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className='form-control'>
                    <label>Password</label>
                    <input type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <input type='submit' value='Login' className='btn btn-block' />
            </form>
        </div>
    )
}

export default Login
