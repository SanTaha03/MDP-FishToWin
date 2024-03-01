export default function ListItemHome({ title, cat, place, price, places }) {
  return (
    <div className="rounded bg-white w-9/10 shadow-xl flex flex-col items-start p-2 mt-2 mb-2 mr-1 ml-1">
      <h2 className="font-l font-semibold">{title}</h2>
      <hr className="w-full" />
      <p className="text-md font-semibold">Catégorie: {cat}</p>
      <div className="flex flex-row justify-between">
        <div className="w-1/2 mr-1">
          <img src="./placeholder.png" alt="placeholder" className="w-full" />
        </div>
        <div className="w-1/2 ml-1 flex flex-col justify-center items-start">
          <p className="font-semibold">Lieu : {place}</p>
          <p className="font-semibold">Prix : {price}</p>
          <p className="font-semibold">Places restantes : {places}</p>
        </div>
      </div>

    </div>
  )
}