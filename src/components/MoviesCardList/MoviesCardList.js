import {
	OPEN_VISIBLE_MOVIES_1280,
	OPEN_VISIBLE_MOVIES_ANOTHER,
	WIDTH_SIZE_1280,
} from '../../utils/constans';
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
				{isOutputFilms.map((card, index) => {
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
				})}
			</ul>

			{buttonInnactive && (
				<button
					onClick={() => {
						if (window.innerWidth >= WIDTH_SIZE_1280) {
							setFilmsCountVisible(
								isFilmsCountVisible + OPEN_VISIBLE_MOVIES_1280,
							);
						} else {
							setFilmsCountVisible(
								isFilmsCountVisible + OPEN_VISIBLE_MOVIES_ANOTHER,
							);
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
