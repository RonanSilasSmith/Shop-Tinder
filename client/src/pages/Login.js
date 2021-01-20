const Login = () => {
    return (
        <form style={{ width: "50%", marginLeft: "25%" }}>
            <h2>Login</h2>
            <div className="form-group">
                <label for="EmailInput">Email address</label>
                <input type="email" className="form-control" id="EmailInput" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label for="PasswordInput">Password</label>
                <input type="password" className="form-control" id="PasswordInput" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default Login;