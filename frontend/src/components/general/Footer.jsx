
import { ReactComponent as Profile } from "../icon/Profile.svg"
import { ReactComponent as Ranking } from "../icon/Ranking.svg"
import { ReactComponent as House } from "../icon/House.svg"

import './Footer.css'
export default function Footer() {
  const url = window.location.href;
  const urlPart = url.split('/');
  const page = urlPart[3];
  let className1;
  let className2;
  let className3;
  switch (page) {
    default:
      className1 = "bg-sky-400 rounded-full hover:bg-sky-400 p-1 w-full isActive";
      className2 = "bg-white rounded-full hover:bg-sky-400 p-1 w-full";
      className3 = "bg-white rounded-full hover:bg-sky-400 p-1 w-full";
      break;
    case "evennement":
      className1 = "bg-white rounded-full p-1 w-full";
      className2 = "bg-white rounded-full hover:bg-sky-400 p-1 w-full";
      className3 = "bg-white rounded-full hover:bg-sky-400 p-1 w-full";
      break;
    case "classement":
      className1 = "bg-white rounded-full p-1 w-full";
      className2 = "bg-sky-400 rounded-full hover:bg-sky-400 p-1 w-ful isActive";
      className3 = "bg-white rounded-full hover:bg-sky-400 p-1 w-full";
      break;
    case "profil":
      className1 = "bg-white rounded-full p-1 w-full"
      className2 = "bg-white rounded-full hover:bg-sky-400 p-1 w-full";
      className3 = "bg-sky-400 rounded-full hover:bg-sky-400 p-1 w-ful isActive";
  }

  return (
    <nav className="footer bg-white sticky bottom-0 flex flex-row justify-around w-full pt-2 pb-2">
      <div className="flex flex-row justify-center align-center rounded-full bg-gradient-to-b from-cyan-400 to-sky-400 pb-[1px]">
        <div className={className1}>
          <House />
        </div>
      </div>
      <div className="flex flex-row justify-center align-center rounded-full bg-gradient-to-b from-cyan-400 to-sky-400 p-[1px]">
        <div className={className2}>
          <Ranking />
        </div>
      </div>
      <div className="flex flex-row justify-center align-center rounded-full bg-gradient-to-b from-cyan-400 to-sky-400 p-[1px]">
        <div className={className3}>
          <Profile />
        </div>
      </div>
    </nav>
  )
}