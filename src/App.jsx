import React from 'react';

import NavBar from './components/NavBarComponent/NavBar';
import ItemListContainer from './components/ItemListContainerComponent/ItemListContainer';


import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  

     return (
       <>
        <NavBar />
        <ItemListContainer greeting={"Bienvenido a la pagina de moda donde encontraras todo tipo de ropa de tu gusto."}/>
       </>
    )

}

export default App
