import { useState } from 'react';

function MoviesCard({ title, duration, photoLink }) {
	const [isMovieSaved, setMovieSaved] = useState(false);

	return (
		<div className='moviesCard'>
			<div className='moviesCard__container'>
				<div className='moviesCard__info'>
					<h3 className='moviesCard__title'>{title}</h3>
					<p className='moviesCard__duration'>{duration}</p>
				</div>
				<button
					onClick={() => {
						setMovieSaved(!isMovieSaved);
					}}
					className={` moviesCard__saved ${
						isMovieSaved ? 'moviesCard__saved_active' : ''
					}`}
				></button>
			</div>
			<img alt={title} src={photoLink} className='moviesCard__image'></img>
		</div>
	);
}

export default MoviesCard;
