import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from './AuthProvider';
import { Link } from 'react-router-dom';
import axios from 'axios';
const LOGIN_URL = '/auth';

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Succsess');
                // this needs chnaging once i figure jwt out
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                     <Link to="/carts" className="btn btn-primary">Shop with us</Link>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <br/><h1>Sign In</h1><br/>
                    <form onSubmit={e => {
    e.preventDefault();
    
    axios.get("http://localhost:8082/user/read").then(response =>{
    const existingUsers = response.data;
    const exists = existingUsers.some(user => {return user.user === user && user.pwd === pwd; });
    if (!exists) {

    axios.post("http://localhost:8082/user/create", {user, pwd})
      .then((response) =>{
        console.log(response);
        setUser("");
        setPwd("");
        setSuccess(`Welcome ${user}`)
        alert(`Welcome ${user}`);  
      }
      )
      .catch((err) => console.error(err));

     } else {
        console.log("User with the same name already exists");
        alert("User with the same name already exists")
    } 
    })  .catch(err => console.error(err));

}}>
                        <label htmlFor="username">Username:</label><br/>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />
<br/>

                        <label htmlFor="password">Password:</label><br/>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <br/>
                        <br/>
                        
                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <Link to="/register" className="btn btn-primary">Sign up</Link>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default Login