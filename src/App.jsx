/* eslint-disable react/no-unescaped-entities */
import ReactPlayer from "react-player"
import './App.css'

function App() {
  const URL = "https://youtu.be/WfOeC0DK0tI"
  return (
    <>
    <div className="grid" >
      <div className="nav">
        <h1>Avivamiento <a>SI</a></h1>
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
            className="react-player"
            url={URL}
            playing={false}
            volume={0.5}
            width='80%'
            height='85%'
            controls
            />
          </div>
        </section>
        <section className="sectionQuestion">
          <div className="insc">
            <h1 >Inscripciones <a>2024</a></h1>
          </div>
          <div className="form">
            {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfC7y9Hzx4Pi9GRREbJgvdvUbr-wiRDfe8Jioap5VSEiChtZg/viewform?embedded=true" width="640" height="640" frameBorder="0" marginHeight="0" marginWidth="0">SI NO CARGA REINICIE LA PAG</iframe> */}
            <h1>CERRADO</h1>
            <div>
              <a className="consultas">Para cualquier consulta, escríbanos al</a>
              <br />
              <a className="WhatsApp" href="https://api.whatsapp.com/send?phone=5491127306488&text=&source=&data=">WhatsApp</a>
            </div>
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
