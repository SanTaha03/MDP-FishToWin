import { useState } from 'react';
import FiltresHautPageHome from '../components/home/FiltresHautPageHome';
import ListItemHome from '../components/home/ListItemHome';
import PopupSinscrire from '../components/home/PopupSinscrire';
import Footer from '../components/general/Footer';

export default function Home(){
    const [inscrire, setInscrire] = useState(null);
  const concours = {
    title: "9ème Challenge",
    cat: "Carnassiers en Bateau",
    place: "Nort/Erdre",
    price: "50€",
    places: "20",
    description: "Lorem ipsum dolor sit amet consectetur. Ornare sodales aliquet mauris sit tristique eleifend est duis curabitur. Sit tortor habitasse massa vivamus morbi nulla donec. Risus sed metus at neque volutpat aenean proin. Amet nulla dignissim viverra amet pretium."
  }
    return(
        <>
        <FiltresHautPageHome />
        <ListItemHome concours={concours} setInscrire={setInscrire} />
        <ListItemHome concours={concours} setInscrire={setInscrire} />
        <ListItemHome concours={concours} setInscrire={setInscrire} />
        <ListItemHome concours={concours} setInscrire={setInscrire} />
        {inscrire && <PopupSinscrire concours={inscrire} setInscrire={setInscrire} />}
        <Footer />
      </>
    )
}