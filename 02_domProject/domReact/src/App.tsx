
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  document.getElementById("");
  //näitab kõiki DIN'i elemente, mis on lehel olemas. See on angu
  //veebilehe struktuuri kaart, mis näitab kõiki elemente ja
  //nende suhteid üksteisega. See võib olla kasulik, kui
  //soovite mõista, kuidas leht on üles ehitatud ja kuidas
  //erinevad elemendid omavahel seotud on.
  //console.log(document);

  //dir näitab kõiki DOM'i elemente, mis on lehel olemas, kuid see
  //kuvab need hierarhiliselt, näidates iga elemendi lapsi ja vanemaid.
  //See on kasulik, kui soovite näha, kuidas elemendid on omavahel seotud
  //ja kuidas nad on paigutatud lehel. See võib aidata teil mõista,
  //kuidas leht on üles ehitatud ja kuidas erinevad elemendid omavahel seotud on,
  //consol.dir(document);

  //Nüüd proovime muuta document title'i, mis on DOM'i element.
  //See on nagu veebilehe pealkiri, mis kuvatakse brauseri vahekaardil.
  //document.title = "DOM'i pealkiri on muudetud"

  //nüüd proovime muuta documendi body taustavärvi, mis on dom'i
  //document.body.style.backgroundColor = "lightblue";

  //Nüüd muudame h1 all olevat teksti, mis on DOM'i element. See on
  //Nagu veebilehe peamine pealkiri, mis kuvatakse lehe sisu sees
  //ära kasuta querySelector Reacti juures ja pigem if kontrolli
  //document.querySelector("h1")!.textContent = "DOM'i peamine pealkiri on muudetud"  // ei tööta veel

  //nüüd sisestame uue muutuja nimega username
  //see on nagu veebilehe kasutajanimi, mis võib olla tühi või sisaldada
  //kasutaja nime. See võib olla kasulik, kui soovite näidata erinevat
  //teksti sõltuvalt sellest, kas kasutaja on sisse logitud või mitte.

  const username: string = "";

  //const domTitle = document.getElementById("dom-Title");
  //if (domTitle) {
  //    domTitle.textContent += username === "" ? "Tere külaline!" : username;
  //}



  return (
    <>
        <h1 id="dom-title">
          {username === "" ? "Mis on DOM!" : username}
        </h1>
        <p>
          DOM (Document Object Model)
          On võimalik teha staatline leht dünaamiliseks. JS/TS on
          võimalik manipuleerida DOM-i, millega saab muuta sisu, struktuuri
          ja vaadet.
          <br />
          <br />
          Kui vaatate index.html, siis näete erinevaid elemente,
          mis suhtlevad DOM'iga. Näiteks div id="root" /div on koht,
          kuhu React rakendus renderdatakse. Kui React rakendus käivitub,
          siis see loob DOM'i elemendid ja renderdab need #root div'i sisse,
          võimaldades teil näha ja suhelda nende elementidega veebilehel.
          <br />
          <br />
          Nt, html sees on head ja titele. Body sees on h1, p, a jne. Need
          on kõik DOM'i elemendid, mida saab JavaScripti abil manipuleerida.
        </p>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
