
import useForm from './useForm';
import validate from './validate'
function Form () {

    const {handleChange, values,handleSubmit,errors} = useForm(validate);

    return (
        <form action="/register" method="POST" onSubmit={handleSubmit} >
            <h1 className="heading">Register Form</h1>
            <div className='input-form'>
                <label htmlFor='username' className='input-label'>Username:</label>
                <input 
                    type="text" 
                    className="input-item" 
                    name="username" 
                    id="username"
                    value={values.username}
                    onChange={handleChange}
                />
                <span className='input-message'>{errors.username}</span>
            </div>
            <div className='input-form'>
                <label htmlFor='email' className='input-label'>Email:</label>
                <input 
                    type="text" 
                    className="input-item" 
                    name="email" 
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                />
                <span className='input-message'>{errors.email}</span>
            </div>
            <div className='input-form'>
                <label htmlFor='password' className='input-label'>Password:</label>
                <input 
                    type="password" 
                    className="input-item" 
                    name="password" 
                    id="password" 
                    value={values.password}
                    onChange={handleChange}
                />
                <span className='input-message'>{errors.password}</span>
            </div>
            <div className='input-form'>
                <label htmlFor="rePassword" className='input-label'>Nhập lại mật khẩu:</label>
                <input 
                    type="password" 
                    className="input-item" 
                    name="rePassword" 
                    id="rePassword"
                    value={values.rePassword}
                    onChange={handleChange}
                />
                <span className='input-message'>{errors.rePassword}</span>
            </div>
            <button className='submit-btn' >Submit</button>
        </form>
    )
}

export default Form;