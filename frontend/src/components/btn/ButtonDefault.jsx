export default function ButtonDefault({ isActive, padding, text, href }) {
  if (isActive == false) {
    return (
      <a className="pt-3" href={href}>
        <button className='px-6 py-2 text-slate-500 rounded border-2 border-slate-300'>{text}</button>
      </a>
    )
  } else {
    return (
      <a href={href}></a>
    )
  }
}