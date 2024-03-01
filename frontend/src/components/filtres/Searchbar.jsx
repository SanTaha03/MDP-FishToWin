import { ReactComponent as Loupe } from "../icon/loupe.svg";
export default function Searchbar() {
  return (
    <div className="bg-white rounded flex flex-row justify-between items-center w-4/5 ml-1 mr-1 pr-2 pl-2 pt-1 pb-1">
      <input placeholder="Rechercher..." className="w-full text-2xl" />
      <Loupe />
    </div>
  )
}