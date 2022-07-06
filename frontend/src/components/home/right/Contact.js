export default function Contact({ user }) {
  return (
    <div className='contact'>
      <div className='contact_img'>
        <img src={user.picture} alt=''></img>
      </div>
      <span>
        {user.first_name} {user.last_name}
      </span>
    </div>
  )
}
