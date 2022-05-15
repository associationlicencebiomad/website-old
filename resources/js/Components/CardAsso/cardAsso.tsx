import * as React from 'react';

import './cardAsso.scss';

export interface ICardAssoProps {
	name: string;
	role: string;
	image: string;
}

export function CardAsso (props: ICardAssoProps) {
  return (
	<div className='cardAsso'>
		<img src={props.image} alt={props.name} className='cardAsso__image' />
		<div className='cardAsso__content'>
			<h3 className='cardAsso__content__name'>{props.name}</h3>
			<p className='cardAsso__content__role'>{props.role}</p>
		</div>
	</div>
  );
}
