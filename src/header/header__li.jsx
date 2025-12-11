export default function Header__li({ id, li__content }) {
  return (
    <li className="nav__li">
      <a href={`#${id}`}>{li__content}</a>
    </li>
  )
}
