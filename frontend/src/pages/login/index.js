import './style.css'
import { Formik, Form } from 'formik'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='login'>
      <div className='login_wrapper'>
        <div className='login_wrap'>
          <div className='login_1'>
            <img src='../../icons/facebook.svg' alt='facebook logo'></img>
            <span>
              Facebook helps you connect and share with the people in your life
            </span>
          </div>
          <div className='login_2'>
            <div className='login_2_wrap'>
              <Formik>
                {(formik) => (
                  <Form>
                    <input type='text' />
                    <input type='text' />
                    <button type='submit' className='blue_btn'>
                      Login
                    </button>
                  </Form>
                )}
              </Formik>
              <Link to='/forgot' className='forgot_password'>
                Forgotten Password
              </Link>
              <div className='sign_splitter'></div>
              <button className='blue_btn open_signup'>Create Account</button>
            </div>
            <Link to='/' className='sign_extra'>
              <b>Create a page</b>
              for a celebrity, brand, or business
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
