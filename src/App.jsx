/* eslint-disable react/no-unescaped-entities */
import ReactPlayer from "react-player"
import './App.css'

function App() {
  const URL = "https://youtu.be/YimXtgMSmpM"
  return (
    <>
    <div className="grid" >
      <div className="nav">
        <h1>AvivamientoSI</h1>
      </div>
        <section className="sectionTitulo">
          <h1 className="titulo">Escuela de Servicio</h1>
          <div className="desc">
            <a>"Palabra fiel: Si alguno anhela obispado, buena obra desea." 1 Timoteo 3:1</a>
          </div>
          
        </section>
        <section className="vid" >
          <div>
            <h1 className="introduction">¿A quiénes está dirigido?</h1>
            <a className="vidIndro">Aqui te dejamos un video introductorio</a>
          </div>
          <div className="player">
            <ReactPlayer
            url={URL}
            playing={false}
            volume={0}
            height={480}
            width={850}
            />
          </div>
        </section>
        <section className="sectionQuestion">
          <div className="insc">
            <h1 >Inscripciones 2024</h1>
          </div>
          <div className="form">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfC7y9Hzx4Pi9GRREbJgvdvUbr-wiRDfe8Jioap5VSEiChtZg/viewform?embedded=true" width="640" height="640" frameBorder="0" marginHeight="0" marginWidth="0">Cargando…</iframe>
          </div>
        </section>
        <footer className="footer">
          <h6>Copyright © 2024 Avivamiento SI</h6>
        </footer>
    </div>
    </>
  )
}

export default App
