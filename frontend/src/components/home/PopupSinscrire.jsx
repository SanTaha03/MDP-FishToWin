import ButtonDefault from '../btn/ButtonDefault'
import { ReactComponent as CloseIcon } from '../icon/closeIcon.svg'
export default function PopupSinscrire({ concours, setInscrire }) {
  return (
    <div className="w-full absolute bg-white rounded-t-xl flex flex-col items-center shadow h-[520px] bottom-0 p-2 m-0" >
      <div className="w-full flex flex-row justify-between">
        <div className="flex flex-col">
          <h3 className="text-xl font-bold">{concours.title}</h3>
          <p>Catégorie: {concours.cat}</p>
        </div>
        <span><CloseIcon onClick={() => { setInscrire(null) }} /></span>
      </div>
      <div className="flex flex-row justify-between w-full mt-3 mb-2 pb-2 border-b-2">
        <div className="w-1/5">
          <img className="w-full" src="./placeholder.png" />
        </div>
        <div className="w-4/6 flex flex-col">
          <p className="w-full">Lieu: {concours.place}</p>
          <p className="w-full">Prix: {concours.price}</p>
          <p className="w-full">Places restantes: {concours.places}</p>
        </div>
      </div>
      <div className="flex flex-col items-center w-full border-b-2 border-slate-300">
        <p className="w-full text-xs font-semibold">{concours.description}</p>
        <button className="border-slate-300 border-2 w-full py-2 rounded text-black font-semibold my-3">Télécharger les règles</button>
      </div>
      <ul className="pt-3 text-xs font-semibold">
        <li>Lorem ipsum dolor sit amet consectetur. </li>
        <li>Ornare sodales aliquet mauris sit tristique </li>
        <li>eleifend est duis curabitur. Sit tortor </li>
        <li>habitasse massa vivamus morbi </li>
        <li>nulla donec. Risus sed metus at neque</li>
      </ul>
      <p className="w-full text-xs pt-3 font-semibold">Lorem ipsum dolor sit amet consectetur. Ornare sodales aliquet mauris sit tristique eleifen</p>

      <ButtonDefault isActive={false} text="Je m'inscris" href="#" />
    </div>
  )
}