import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const ItemListContainer = ({ img, juego, precio, description }) => (
	<div className='UserCard d-flex justify-content-center'>
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
	</div>
);

export default ItemListContainer;