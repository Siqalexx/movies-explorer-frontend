import { useEffect, useState } from 'react';

function MoviesCard({
	title,
	duration,
	photoLink,
	saveMovie = null,
	card,
	deleteMovie,
	checkSaveFilms,
	savedPage = false,
}) {
	const [isMovieSaved, setMovieSaved] = useState(false);
	const setDuration = time => {
		const minutes = time % 60;
		const hours = (time - minutes) / 60;
		const str = `${hours}ч ${minutes}м`;
		return str;
	};
	useEffect(() => {
		checkSaveFilms(card, setMovieSaved);
	});
	return (
		<div className='moviesCard'>
			<div className='moviesCard__container'>
				<div className='moviesCard__info'>
					<h3 className='moviesCard__title'>{title}</h3>
					<p className='moviesCard__duration'>{setDuration(duration)}</p>
				</div>

				<button
					onClick={e => {
						if (!isMovieSaved && !savedPage) {
							return saveMovie(card, setMovieSaved);
						}
						deleteMovie(savedPage ? card._id : card.id, setMovieSaved);
					}}
					className={`${
						!savedPage
							? `moviesCard__saved ${
									isMovieSaved ? 'moviesCard__saved_active' : ''
							  }
							`
							: 'moviesCard__delete'
					}`}
				></button>
			</div>
			<img alt={title} src={photoLink} className='moviesCard__image'></img>
		</div>
	);
}

export default MoviesCard;
