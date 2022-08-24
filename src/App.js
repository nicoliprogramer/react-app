import './estilo.css';

function App() {
  let imagen = "1-2-e1610552906250-300x300.jpg";
  let titulo = "Desayunos y regalos sorpresa";
  let subtitulo = "Envios a domicilio en Córdoba Capital"
  const producto = { id: 1, image: imagen, title: titulo, subtitle: subtitulo }

  return (
    <div className="container">
      <div className='row'>
        <div className='col-md-4 offset-md-2'>
          <img src={producto.image} alt={producto.title} className="img-fluid" />
        </div>
        <div className='col-md-4'>
          <h1>{producto.title}</h1>
          <p>{producto.subtitle}</p>
        </div>
      </div>
    </div >
  );
}

export default App;
