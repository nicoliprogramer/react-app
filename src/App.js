import './estilo.css';
import 'core-js/actual';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import Titulo from './components/Titulo';
import Input from './components/Input';

function App() {
  const lista = ["Envio Gratuito a Domicilio", "Hasta 6 Coutas Fijas", "Beneficios de Cliente"];
  const items = lista.map(items => (
    <ItemListContainer valor={items} />
  ))

  return (
    <div className='container-fluid fondo_rojo'>

      <NavBar curso="Curso de React" />

      <main className='py-3'>
        <Titulo valor="DESAYUNOS CÓRDOBA" />
        <ul>
          {items}
        </ul>


        <Titulo valor="Ingrese su Usuario" />
        <form>

          <div className="mb-3">
            <label className='form-label'>Nombre</label>
            <Input valor="Nombre" /><br />
          </div>

          <div className="mb-3">
            <label className='form-label'>Email</label>
            <Input valor="Nombre" /><br />
          </div>
          <button type="submit" className="btn btn-primary">Acceder</button>

          <br /><br /><br />
        </form>
      </main>


      <Footer ubicacion="Copyright © 2022 | Desayunos Córdoba" />

    </div >
  );
}

export default App;

