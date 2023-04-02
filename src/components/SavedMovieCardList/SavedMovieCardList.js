import { useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function SavedMovieCardList({
	isOutputFilms,
	isFilmsCountVisible,
	setFilmsCountVisible,
	buttonInnactive,
	saveMovie,
	deleteMovie,
	isSaveMoviesList,
}) {
	const checkSaveFilms = (card, setMovieSaved) => {
		const checkFilms = isSaveMoviesList.find(movie => {
			return movie.movieId === card.id;
		});
		if (checkFilms) {
			setMovieSaved(true);
		}
	};
	return (
		<section className='moviesCardList'>
			<ul className='moviesCardList__container'>
				{isOutputFilms.length === 0 ? (
					<h2 className='moviesCardList__notFound'>Ничего не найдено</h2>
				) : (
					isOutputFilms.map((card, index) => {
						return (
							<li key={card._id} className='moviesCardList__movie'>
								<MoviesCard
									savedPage={true}
									checkSaveFilms={checkSaveFilms}
									card={card}
									deleteMovie={deleteMovie}
									title={card.nameRU}
									duration={card.duration}
									photoLink={`${card.image}`}
								/>
							</li>
						);
					})
				)}
			</ul>
		</section>
	);
}

export default SavedMovieCardList;
