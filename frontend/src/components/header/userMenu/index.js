import { useState } from 'react'
import { Link } from 'react-router-dom'
import DisplayAccess from './DisplayAcess'
import HelpSupport from './HelpSupport'
import SettingsPrivacy from './SettingsPrivacy'

export default function UserMenu({ user }) {
  const [visible, setVisible] = useState(0)
  return (
    <div className='menu'>
      {visible === 0 && (
        <div>
          <Link to='/ptofile' className='menu_header hover3'>
            <img src={user?.picture} alt=''></img>
            <div className='menu_col'>
              <span>
                {user?.first_name} {user?.last_name}
              </span>
              <span>See your profile</span>
            </div>
          </Link>
          <div className='menu_splitter'></div>
          <div className='menu_main hover3'>
            <div className='small_circle'>
              <i className='report_filled_icon'></i>
            </div>
            <div className='menu_col'>
              <div className='menu_span1'>Give Feedback</div>
              <div className='menu_span2'>Help us improve facebook</div>
            </div>
          </div>
          <div className='menu_splitter'></div>
          <div
            className='menu_item hover3'
            onClick={() => {
              setVisible(1)
            }}
          >
            <div className='small_circle'>
              <i className='settings_filled_icon'></i>
            </div>
            <span>Settings & Privacy</span>
            <div className='rArrow'>
              <i className='right_icon'></i>
            </div>
          </div>
          <div
            className='menu_item hover3'
            onClick={() => {
              setVisible(2)
            }}
          >
            <div className='small_circle'>
              <i className='help_filled_icon'></i>
            </div>
            <span>Help & Support</span>
            <div className='rArrow'>
              <i className='right_icon'></i>
            </div>
          </div>
          <div
            className='menu_item hover3'
            onClick={() => {
              setVisible(3)
            }}
          >
            <div className='small_circle'>
              <i className='dark_filled_icon'></i>
            </div>
            <span>Display & Accessibility</span>
            <div className='rArrow'>
              <i className='right_icon'></i>
            </div>
          </div>
          <div className='menu_item hover3'>
            <div className='small_circle'>
              <i className='logout_filled_icon'></i>
            </div>
            <span>Log Out</span>
          </div>
        </div>
      )}
      {visible === 1 && (
        <SettingsPrivacy setVisible={setVisible}></SettingsPrivacy>
      )}
      {visible === 2 && <HelpSupport setVisible={setVisible}></HelpSupport>}
      {visible === 3 && <DisplayAccess setVisible={setVisible}></DisplayAccess>}
    </div>
  )
}