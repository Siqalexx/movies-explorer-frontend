import { useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
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
							<li key={card.id} className='moviesCardList__movie'>
								<MoviesCard
									checkSaveFilms={checkSaveFilms}
									card={card}
									deleteMovie={deleteMovie}
									saveMovie={saveMovie}
									title={card.nameRU}
									duration={card.duration}
									photoLink={`https://api.nomoreparties.co${card.image.url}`}
								/>
							</li>
						);
					})
				)}
			</ul>

			{buttonInnactive && (
				<button
					onClick={() => {
						if (window.innerWidth >= 1280) {
							setFilmsCountVisible(isFilmsCountVisible + 3);
						} else {
							setFilmsCountVisible(isFilmsCountVisible + 2);
						}
					}}
					className='moviesCardList__button'
				>
					Ещё
				</button>
			)}
		</section>
	);
}

export default MoviesCardList;
