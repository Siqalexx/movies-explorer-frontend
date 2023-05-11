import { useEffect, useState } from 'react';
import { api } from '../../utils/MainApi';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SavedMovieCardList from '../SavedMovieCardList/SavedMovieCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import { DURATION_SHORT_FILM } from '../../utils/constans';

function SavedMovies() {
	const [isSaveMoviesList, setSaveMoviesList] = useState([]);
	const [isSearchInput, setSearchInput] = useState('');
	const [isCheckboxMovie, setCheckboxMovie] = useState(false);
	const [isNotFoundFilms, setNotFoundFilms] = useState(false);
	const [isLoading, setLoading] = useState(false);
	const [saveMovieList, setSaveMovieList] = useState([]);
	useEffect(() => {
		api
			.getSaveMovies()
			.then(data => {
				if (data) {
					setSaveMovieList(data);
					return;
				} else {
					console.log('error save movies');
					return;
				}
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	function deleteMovie(id, setMovieSaved) {
		api.deleteMovie(id).then(data => {
			if (data) {
				const filterList = saveMovieList.filter(movie => {
					return movie._id !== data._id;
				});
				setSaveMoviesList(filterList);
				setMovieSaved(false);
			}
		});
	}

	function filterFilms() {
		return saveMovieList.filter(film => {
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
		if (isSearchInput) {
			setLoading(true);
			const films = await filterFilms();

			if (films.length === 0) {
				setNotFoundFilms(true);
			} else {
				setNotFoundFilms(false);
			}
			setSaveMoviesList(films);
			setLoading(false);
			localStorage.setItem('isSearchInputSaved', isSearchInput);
			localStorage.setItem('isCheckboxMovieSaved', isCheckboxMovie);
		} else {
			console.log('error');
		}
	}

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
				<SavedMovieCardList
					isSaveMoviesList={isSaveMoviesList}
					deleteMovie={deleteMovie}
				></SavedMovieCardList>
			)}
			{}
		</section>
	);
}

export default SavedMovies;
