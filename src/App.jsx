import ReactPlayer from "react-player"
import './App.css'

function App() {
  const URL = "https://youtu.be/YimXtgMSmpM"
  return (
    <>
    <div className="grid" >
      <div className="nav">
        <h1>navvar</h1>
      </div>
        <section className="sectionTitulo">
          <h1 className="titulo">Escuela de Servicio</h1>
          <a className="desc">Escuela de Servicio - AvivamientoSI</a>
        </section>
        <section className="vid" >
          <h1 className="introduction">Introduccion</h1>
          <div className="player">
            <ReactPlayer
            url={URL}
            playing={false}
            volume={0}
            height={1080}
            width={1920}
            />
          </div>
        </section>
        <section className="sectionQuestion">
          <h1 className="insc">Inscripciones 2024</h1>
          <div className="form">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd4Hnbrox28PvtJiw9qfU4awFJXMSm4sK2grDTX3h6RVPZqOQ/viewform?embedded=true" width="2000" height="2000" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
          </div>
        </section>
        <footer className="footer">
          <h3>AvivamientoSI</h3>
        </footer>
    </div>
    </>
  )
}

export default App
