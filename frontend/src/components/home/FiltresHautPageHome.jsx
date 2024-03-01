import BtnFiltre from "../filtres/BtnFiltre";
import Searchbar from "../filtres/Searchbar";

export default function FiltresHautPageHome() {
  return (
    <div className="w-5/6 flex flex-row justify-between mt-10 mb-5">
      <Searchbar />
      <BtnFiltre />
    </div>
  )
}