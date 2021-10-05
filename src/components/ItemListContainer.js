import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import ItemCount from './ItemCount';

const ItemListContainer = ({ img, juego, precio, description }) => (
	<div className='UserCard d-flex justify-content-center flex-column'>
		<Card>
			<Image src={img} wrapped ui={false} />
			<Card.Content>
				<Card.Header>{juego}</Card.Header>
				<Card.Meta>
					<span className='precio'>{precio}</span>
				</Card.Meta>
				<Card.Description>{description}</Card.Description>
			</Card.Content>
		</Card>
		<div>
			<ItemCount/>
		</div>
	</div>
);

export default ItemListContainer;