import React from 'react';
import './App.css';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

class App extends React.Component {

	render() {
		const titulo = 'GTA 5';
		return (
			<div className='App'>
        <div>
          <NavBar />
        </div>
				<div className='UserSection d-flex justify-content-evenly mt-5'>
					<ItemListContainer
						juego={titulo}
						precio='$ 5000'
						description='El mundo abierto mas vendido de la historia. En Gta 5 vas a poder hacer lo que no te animas a hacer en la vida real'
						img='https://react.semantic-ui.com/images/avatar/large/matthew.png'
					/>
					<ItemListContainer
						juego='Fifa 22'
						precio='$11000'
						description='El nuevo videojuego de futbol de Ea Sports salio a la venta! No te pierdas la oportunidad de jugar con tu equipo favorito.'
						img='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
					/>
					<ItemListContainer
						juego='Fortnite'
						precio='GRATIS'
						description='Juega el battle royale mas famoso del momento totalmente gratis y con tus amigos!'
						img='https://react.semantic-ui.com/images/avatar/large/daniel.jpg'
					/>
				</div>
			</div>
		);
	}
}

export default App;
