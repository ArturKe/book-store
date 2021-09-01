import React, { useState } from 'react';
import './SignInForm.css'
import MyButton from '../../UI/button/MyButton';
import MyInput from '../../UI/input/MyInput';
import Footer from '../../footer/Footer';


function SignInForm (props){

    const [signData, setsignData] = useState({login:'',password:''})

    const sendData = (e) => {
        e.preventDefault();
        console.log(signData);
        console.log('Data Send');
        setsignData({login:'',password:''})
        
    }

    return(

        <div className="wraper">
            
            <form className="form_sign_in">
                <h2>Sign in</h2>
                <h2>{signData.login}</h2>
                <h2>{signData.password}</h2>
            
                <MyInput 
                    value={signData.login}
                    type = "text"
                    placeholder={'Login'}
                    onChange={e=>setsignData({...signData, login: e.target.value})}

                />
                <MyInput
                    value={signData.password}
                    placeholder="Password"
                    type="password"
                    onChange={e=>setsignData({...signData, password: e.target.value})}
                />
                <MyButton onClick={sendData}>Войти</MyButton>
 
            </form>

            <Footer />
        </div>
    )
}

export default SignInForm