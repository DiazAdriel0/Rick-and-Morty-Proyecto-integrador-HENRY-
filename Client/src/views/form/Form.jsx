import { useState } from "react"
import validate from "../../utils/validate/validation"
import style from "./form.module.css"

export default function Form({login}) {

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    })

    function handleChange(e) {
        const {name, value} = e.target
        setUserData({
            ...userData,
            [name]: value
        })
        setErrors(validate({
            ...userData,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(!errors.email && !errors.password){
            login(userData)
        }else{
            alert("Invalid credentials")
        }
    }
    
    return (
        <div className={style.container}>
            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.inputContainer}>
                    <label className={style.formLabel}>EMAIL</label>
                    <input type="email" name="email" value={userData.email} placeholder="Insert email" onChange={handleChange}/>
                    {errors.email ? <p>{errors.email}</p> : <p><br></br></p>}

                    <label className={style.formLabel}>PASSWORD</label>
                    <input type="password" name="password" value={userData.password} placeholder="Insert password" onChange={handleChange}/>
                    {errors.password ? <p>{errors.password}</p> : <p><br></br></p>}
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}