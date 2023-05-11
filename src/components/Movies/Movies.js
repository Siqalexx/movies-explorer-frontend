import { useEffect, useState } from 'react';
import { api } from '../../utils/MainApi';
import { apiMovie } from '../../utils/MoviesApi';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import {
	DURATION_SHORT_FILM,
	WIDTH_SIZE_1280,
	WIDTH_SIZE_480,
} from '../../utils/constans';

function Movies() {
	const searchInput = localStorage.getItem('isSearchInput');
	const checkboxState = localStorage.getItem('isCheckboxMovie');
	const countFilms = localStorage.getItem('isFilmsCountVisible');
	const filterFilmsList = localStorage.getItem('isFilterFilms');
	let filmList = [];

	const [isFilterFilms, setFilterFilms] = useState([]);
	const [isOutputFilms, setOutputFilms] = useState([]);
	const [isSearchInput, setSearchInput] = useState('');
	const [isCheckboxMovie, setCheckboxMovie] = useState(false);
	const [isFilmsCountVisible, setFilmsCountVisible] = useState(12);
	const [buttonInnactive, setButtonInnactive] = useState(false);
	const [isSaveMoviesList, setSaveMoviesList] = useState([]);
	const [isNotFoundFilms, setNotFoundFilms] = useState(false);
	const [isLoading, setLoading] = useState(false);

	function deleteMovie(id, setMovieSaved) {
		const user = isSaveMoviesList.find(savedMovie => {
			console.log(savedMovie);
			return savedMovie.movieId === id;
		});
		api.deleteMovie(user._id).then(data => {
			if (data) {
				const filterList = isSaveMoviesList.filter(movie => {
					return movie._id !== data._id;
				});
				setSaveMoviesList(filterList);
				setMovieSaved(false);
			}
		});
	}

	function saveMovie(card, setMovieSaved) {
		api
			.setMovie(
				card.country,
				card.director,
				card.duration,
				card.year,
				card.description,
				card.image.url,
				card.trailerLink,
				card.nameRU,
				card.nameEN,
				card.image.formats.thumbnail.url,
				card.id,
			)
			.then(data => {
				setSaveMoviesList([...isSaveMoviesList, data]);

				setMovieSaved(true);
			});
	}

	useEffect(() => {
		api
			.getSaveMovies()
			.then(data => {
				if (data) {
					return setSaveMoviesList(data);
				} else {
					console.log('error save movies');
					return;
				}
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	useEffect(() => {
		if (searchInput && checkboxState && countFilms) {
			setSearchInput(searchInput);
			setFilmsCountVisible(countFilms);
			setCheckboxMovie(checkboxState === 'true');
			setFilterFilms(JSON.parse(filterFilmsList));
		}
	}, []);

	useEffect(() => {
		function setCountFilms() {
			return setTimeout(() => {
				if (window.innerWidth >= WIDTH_SIZE_1280) {
					setFilmsCountVisible(12);
				} else if (window.innerWidth >= WIDTH_SIZE_480) {
					setFilmsCountVisible(7);
				} else if (window.innerWidth < WIDTH_SIZE_480) {
					setFilmsCountVisible(5);
				}
			}, 100);
		}
		setCountFilms();

		window.addEventListener('resize', () => {
			setCountFilms();
		});

		return () => window.removeEventListener('resize', setCountFilms);
	}, []);

	function filterFilms() {
		return filmList.filter(film => {
			if (isCheckboxMovie) {
				return (
					film.duration <= DURATION_SHORT_FILM &&
					(film.nameEN.toLowerCase().includes(isSearchInput.toLowerCase()) ||
						film.nameRU.toLowerCase().includes(isSearchInput.toLowerCase()))
				);
			}
			return (
				film.nameEN.toLowerCase().includes(isSearchInput.toLowerCase()) ||
				film.nameRU.toLowerCase().includes(isSearchInput.toLowerCase())
			);
		});
	}

	async function searchSubmit() {
		if (filmList.length === 0) {
			setLoading(true);
			await apiMovie
				.getFilms()
				.then(data => {
					if (!data) {
						console.log('error');
						return;
					}
					setLoading(false);
					return (filmList = [...data]);
				})
				.catch(err => {
					console.log(err);
				});
		}
		if (isSearchInput) {
			const films = filterFilms();

			if (films.length === 0) {
				setNotFoundFilms(true);
			} else {
				setNotFoundFilms(false);
			}
			setFilterFilms(films);

			localStorage.setItem('isSearchInput', isSearchInput);

			localStorage.setItem('isCheckboxMovie', isCheckboxMovie);

			localStorage.setItem('isFilmsCountVisible', isFilmsCountVisible);
		} else {
			console.log('error');
		}
	}

	useEffect(() => {
		localStorage.setItem('isFilterFilms', JSON.stringify(isFilterFilms));
		setOutputFilms(() => {
			return isFilterFilms.slice(0, isFilmsCountVisible);
		});
		localStorage.setItem('isFilmsCountVisible', isFilmsCountVisible);
	}, [isFilmsCountVisible, isFilterFilms]);

	useEffect(() => {
		if (isFilterFilms.length - isFilmsCountVisible > 0) {
			setButtonInnactive(true);
		} else {
			setButtonInnactive(false);
		}
	}, [isOutputFilms, isFilmsCountVisible, isFilterFilms.length]);

	return (
		<section className='movies'>
			<SearchForm
				searchSubmit={searchSubmit}
				isSearchInput={isSearchInput}
				setSearchInput={setSearchInput}
				isCheckboxMovie={isCheckboxMovie}
				setCheckboxMovie={setCheckboxMovie}
			></SearchForm>
			{isLoading ? (
				<Preloader />
			) : isNotFoundFilms ? (
				<h2 className='moviesCardList__notFound'>Ничего не найдено</h2>
			) : (
				<MoviesCardList
					isFilmsCountVisible={isFilmsCountVisible}
					setFilmsCountVisible={setFilmsCountVisible}
					isOutputFilms={isOutputFilms}
					buttonInnactive={buttonInnactive}
					saveMovie={saveMovie}
					deleteMovie={deleteMovie}
					isSaveMoviesList={isSaveMoviesList}
				></MoviesCardList>
			)}
		</section>
	);
}

export default Movies;
