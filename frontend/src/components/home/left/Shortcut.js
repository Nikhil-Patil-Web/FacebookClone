export default function Shortcut({ link, img, name }) {
  return (
    <a href={link} target='_blank' rel='noreferrer' className='shortcut_item'>
      <img src={img} alt=''></img>
      <span>{name}</span>
    </a>
  )
}
