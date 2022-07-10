import { useNavigate } from 'react-router-dom'
import { Form, Formik } from 'formik'
import LogInInput from '../../components/inputs/logininputs'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'

export default function CodeVerify({ code, setCode, error }) {
  const validateCode = Yup.object({
    code: Yup.string()
      .required('Code is required')
      .min('5', 'Code must be of 5 characters')
      .max('5', 'Code must be of 5 characters'),
  })

  return (
    <div className='reset_form'>
      <div className='reset_form_header'>Code Verification</div>
      <div className='reset_form_text'>
        Please enter the code that has been sent to your email.
      </div>
      <Formik
        enableReinitialize
        initialValues={{
          code,
        }}
        validationSchema={validateCode}
      >
        {(formik) => (
          <Form>
            <LogInInput
              type='text'
              name='code'
              onChange={(e) => setCode(e.target.value)}
              placeholder='Code'
            />
            {error && <div className='error_text'>{error}</div>}
            <div className='reset_btns'>
              <Link to='/login' className='gray_btn'>
                Cancel
              </Link>
              <button type='submit' className='blue_btn'>
                Continue
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
