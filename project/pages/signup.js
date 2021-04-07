import React, { useState, useEffect, useRef} from 'react';
import { Form, Button, Message, Segment, TextArea, Divider } from 'semantic-ui-react'
import { HeaderMessage, FooterMessage } from '../components/Common/WelcomeMessage.js'
import CommonInputs from '../components/Common/CommonInputs.js'
import ImageDropDiv from '../components/Common/ImageDropDiv.js'

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
    const [formLoading,setFormLoading] = useState(false)
    const [submitDisabled, setSubmitDisabled] = useState(true)

    const [username, setUserName] = useState('')
    const [usernameLoading, setUserNameLoading] = useState(false)
    const [usernameAvailable, setUserNameAvailable] = useState(false)

    const [media, setMedia] = useState(null)
    const [mediaPreview, setMediaPreview] = useState(null)
    const [highlighted, setHighlighted] = useState(null)
    const inputRef = useRef()


    const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

    const handleChange =(e)=>{
        const {name,value, files} = e.target
        
        if(name==='media'){
            setMedia(files[0])
            setMediaPreview(URL.createObjectURL(files[0]))
        }

        setUser(prev=>({...prev,[name]:value}))
    }

    const handleSubmit = (e) =>(
        e.preventDefault()
    )


    useEffect(()=>{
        const isUser = Object.values({name,email,password,bio}).every(item=>Boolean(item))
        isUser ? setSubmitDisabled(false) : setSubmitDisabled(true)

    },[user])


    return (
        
    <>
        <HeaderMessage />

        <Form loading={formLoading} error={errorMessage!==null} onSubmit={handleSubmit}>

            <Message 
                error 
                header="Oops!" 
                content={errorMessage} 
                onDismiss={()=>setErrorMessage(null)}
            />

            <Segment>
                <ImageDropDiv 
                    mediaPreview={mediaPreview}
                    setMediaPreview={setMediaPreview}
                    setMedia={setMedia}
                    inputRef={inputRef}
                    setHighlighted={setHighlighted}
                    handleChange={handleChange}
                />

                <Form.Input 
                    label="Name" 
                    placeholder="Name" 
                    name="name" 
                    value={name} 
                    onChange={handleChange} 
                    fluid 
                    icon="user"
                    iconPosition="left"
                    required
                />

                <Form.Input 
                    label="Email" 
                    placeholder="Email" 
                    name="email" 
                    value={email} 
                    onChange={handleChange} 
                    fluid 
                    icon="envelope"
                    iconPosition="left"
                    type="email"
                    required
                />

                <Form.Input 
                    label="Password" 
                    placeholder="Password" 
                    name="password" 
                    value={password} 
                    onChange={handleChange} 
                    fluid 
                    icon={{
                        name:"eye",
                        circular:true,
                        link:true,
                        onClick:()=>setShowPassword(!showPassword)
                     }}
                    iconPosition="left"
                    type={showPassword ? "text" : "password"}
                    required
                />

                <Form.Input 
                    loading={usernameLoading}
                    error={!usernameLoading}
                    label="UserName" 
                    placeholder="UserName" 
                   value={username} 
                    onChange={e=>{
                        setUserName(e.target.value)
                        if(regexUserName.test(e.target.value)){
                            setUserNameAvailable(true)
                        }else{
                            setUserNameAvailable(false)
                        }
                    }} 
                    fluid 
                    icon={usernameAvailable ? "check" : "close"}
                    iconPosition="left"
                    required
                />

                <CommonInputs 
                    user={user}
                    showSocialLinks={showSocialLinks}
                    setShowSocialLinks={setShowSocialLinks}
                    handleChange={handleChange}
                />

                <Divider hidden/>

                <Button 
                    signup="signup"
                    content="Signup"
                    type="submit"
                    color="orange"
                    disabled={submitDisabled || !usernameAvailable}
                />
            </Segment>

        </Form>


        <FooterMessage />
    </>

    )
}

export default signup;