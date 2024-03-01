import { ReactComponent as ArrowLeft } from '../icon/ArrowLeft.svg'
import './Header.css';
export default function Header({ title }) {
  return (
    <div className="header bg-transparent flex flex-row w-3/4 justify-between">
      <ArrowLeft />
      <h1>{title}</h1>
      <div></div>
    </div>
  )
}