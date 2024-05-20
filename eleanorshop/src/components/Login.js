

import { GoogleLogin } from "@react-oauth/google";
const clientId='681889592320-69kqptjq89t292re86fqaj0b7hfoj094.apps.googleusercontent.com'

const onSuccess =(res) =>{
console.log("Login Success ! Current User :",res.profileObj);
}
const onError =(res) =>{
    console.log("Login Error ! Current User :",res);
    }

function Login(){
    return(
        <div id='signInButton'>
            <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onError={onError}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />
        </div>
    )
}
export default Login;