import { useEffect, useState } from 'react';
import { TIME_DURATION } from '../../utils/constans';

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
		const minutes = time % TIME_DURATION;
		const hours = (time - minutes) / TIME_DURATION;
		const str = `${hours}ч ${minutes}м`;
		return str;
	};
	useEffect(() => {
		checkSaveFilms(card, setMovieSaved);
	});
	return (
		<div className='moviesCard'>
			<div className='moviesCard__container'>
				<a
					href={card.trailerLink}
					rel='noreferrer'
					target='_blank'
					className='moviesCard__info'
				>
					<h3 className='moviesCard__title'>{title}</h3>
					<p className='moviesCard__duration'>{setDuration(duration)}</p>
				</a>

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
			<a href={card.trailerLink} rel='noreferrer' target='_blank'>
				<img alt={title} src={photoLink} className='moviesCard__image'></img>
			</a>
		</div>
	);
}

export default MoviesCard;
