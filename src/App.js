
import './App.css';
import Testimonio from "./componentes/Testimonio";

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Bienvenidos al curso</h1>
      <Testimonio 
      nombre="Luis Gabriel"
      pais="Argentina"
      imagen="gabriel"
      cargo=" Programador Web"
      empresa="Obershopping"
      testimonio="El Plan de Estudios de 4 años de duración, te prepara para planificar objetivos financieros, generar información contable y asesorar sobre su utilización en la gestión de empresas y organizaciones, especializándote en impuestos, costos, auditoria, compliance, fusiones, adquisiciones, aspectos legales." />
     
      <Testimonio 
      nombre="Julia"
      pais="Brasil"
      imagen="julia"
      cargo=" Ingeniera Web"
      empresa="Spotify"
      testimonio="Estudiá con destacados profesores, líderes de las principales firmas del mercado local e internacional tales como PwC, BDO, Bértora, Mc Ewan, Lisicki, Litvin & Asoc, Arizmendi, EY, KPMG, entre otras.

      " />
      <Testimonio 
      nombre="Lucia Iglesias "
      pais="Estados Unidos"
      imagen="lucia"
      cargo="Diseñadora Grafica"
      empresa="NSA"
      testimonio="Desarrollá competencias como negociación, capacidad de toma de decisiones, coaching, creatividad, innovación y trabajo en equipo.

      " />
      </div>
    </div>
  );
}

export default App;
