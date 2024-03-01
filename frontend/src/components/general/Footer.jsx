
import { ReactComponent as Profile } from "../icon/Profile.svg"
import { ReactComponent as Ranking } from "../icon/Ranking.svg"
import { ReactComponent as House } from "../icon/House.svg"

import './Footer.css'
export default function Footer() {
  return (
    <nav className="footer bg-transparent flex-1 flex-row justify-around w-full py-2">
      <div className="bg-neutral-300 hover:bg-sky-400 rounded-full p-1">
        <House />
      </div>
      <div className="bg-neutral-300 hover:bg-sky-400 rounded-full p-1">
        <Ranking />
      </div>
      <div className="bg-neutral-300 hover:bg-sky-400 rounded-full p-1">
        <Profile />
      </div>
    </nav>
  )
}