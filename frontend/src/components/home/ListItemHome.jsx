export default function ListItemHome({ concours, setInscrire }) {
  return (
    <div onClick={() => setInscrire(concours)} className="cursor-pointer rounded bg-white w-9/10 shadow-xl flex flex-col items-start p-3 pt-1 mt-2 mb-2 mr-1 ml-1">
      <h2 className="font-l font-semibold">{concours.title}</h2>
      <hr className="w-full" />
      <p className="text-base font-semibold">Catégorie: {concours.cat}</p>
      <div className="flex flex-row justify-between pt-1">
        <div className="w-2/5 mr-1">
          <img src="./placeholder.png" alt="placeholder" className="w-full" />
        </div>
        <div className="w-3/5 ml-1 flex flex-col justify-center items-start">
          <p className="font-semibold">Lieu : {concours.place}</p>
          <p className="font-semibold">Prix : {concours.price}</p>
          <p className="font-semibold">Places restantes : {concours.places}</p>
        </div>
      </div>

    </div>
  )
}