import "./User_Login.css"
import { IoClose } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoLockClosed } from "react-icons/io5";

function User_Login() {
    // js code

    return(
        // html code
        <>
            {/*background container*/}
            <div id={"page"} className="allbackground">
                {/*content container*/}
                <div className="container">
                    <div className="logo"><a href="#"><h4><span>Taste</span>Trail</h4></a></div>
                    <div className="text_img">
                        <div className="text">
                            <h1>Get Started With<br/>Your</h1>
                            <h3><span>Cooking Journey</span></h3>
                        </div>
                        <div className="gif_space">
                        </div>
                    </div>
                    <div className="wrapper">
                        <span className="icon-close"><IoClose /></span>
                        <div className="form-box login">
                            <h2>LOGIN</h2>
                            <form action="#">
                                <div className="input-box">
                                    <span className="icon"><IoMail /></span>
                                    <input type="email" required/>
                                        <label>Email</label>
                                </div>
                                <div className="input-box">
                                    <span className="icon"><IoLockClosed /></span>
                                    <input type="password" required/>
                                        <label>Password</label>
                                </div>
                                <div className="remember-forgot">
                                    <label><input type="checkbox"/>Remember me</label>
                                    <a href="#">Forgot Password?</a>
                                </div>
                                <button type="submit" className="btn">Login</button>
                                <div className="login-register">
                                    <p>Don't have an account?<a href="#" className="register-link">Register</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default User_Login;