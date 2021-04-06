import React, { useState, useEffect, useRef} from 'react';
import { Form, Button, Message, Segment, TextArea, Divider } from 'semantic-ui-react'
import { HeaderMessage, FooterMessage } from '../components/Common/WelcomeMessage.js'

function signup(props) {
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        bio:"",
        facebook:"",
        youtube:"",
        twitter:"",
        instagram:""
    })

    const {name, email, password, bio} = user

    const [showSocialLinks,setShowSocialLinks] = useState(false)
    const [showPassword,setShowPassword] = useState(false)
    const [errorMessage,setErrorMessage] = useState(null)

    const [username, setUserName] = useState('')
    const [usernameLoading, setUserNameLoading] = useState(false)
    const [usernameAvailable, setUserNameAvailable] = useState(false)


    return (
        
    <>
        <HeaderMessage />

        <FooterMessage />
    </>

    )
}

export default signup;