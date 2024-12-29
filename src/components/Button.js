import { Link } from "react-router-dom"


export default function MenuButton({text, move}) {
  const address = `/${move}`
  const onClick = () => {
    console.log(address);
  }
  return (
  <div>
    <Link to={address}><button onClick={onClick}>{text}</button></Link>
  </div>
  )
}