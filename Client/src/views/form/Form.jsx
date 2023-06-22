import { useState } from "react"
import validate from "../../utils/validate/validation"

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
        <div>
            <form onSubmit={handleSubmit}>
                <label>EMAIL</label>
                <input type="email" name="email" value={userData.email} placeholder="Email" onChange={handleChange}/>
                {errors.email ? <p>{errors.email}</p> : null}

                <label>PASSWORD</label>
                <input type="password" name="password" value={userData.password} placeholder="Password" onChange={handleChange}/>
                {errors.password ? <p>{errors.password}</p> : null}

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}