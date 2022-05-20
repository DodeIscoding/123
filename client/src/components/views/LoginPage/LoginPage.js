import React from "react"

function LoginPage() {
    return (
<div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            L<form>
                <label>email</label>
                <input type="email" value onchange />
                <label>Password</label>
                <input type="password" value onchange />
                <br/>
                <button>Login</button>
            </form>
        </div>
    )
}
export default LoginPage