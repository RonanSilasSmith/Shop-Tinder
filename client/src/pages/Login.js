const Login = () => {
    return (
        <form style={{ width: "50%", marginLeft: "25%" }}>
            <h2>Login</h2>
            <div class="form-group">
                <label for="EmailInput">Email address</label>
                <input type="email" class="form-control" id="EmailInput" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div class="form-group">
                <label for="PasswordInput">Password</label>
                <input type="password" class="form-control" id="PasswordInput" placeholder="Password"/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    );
};

export default Login;