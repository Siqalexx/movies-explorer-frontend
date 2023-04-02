import { useEffect, useState } from 'react';
import { api } from '../../utils/MainApi';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SavedMovieCardList from '../SavedMovieCardList/SavedMovieCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies() {
	const [isSaveMoviesList, setSaveMoviesList] = useState([]);
	const [isSearchInput, setSearchInput] = useState('');
	const [isCheckboxMovie, setCheckboxMovie] = useState(false);
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

	function deleteMovie(id, setMovieSaved) {
		api.deleteMovie(id).then(data => {
			if (data) {
				const filterList = isSaveMoviesList.filter(movie => {
					return movie._id !== data._id;
				});
				setSaveMoviesList(filterList);
				setMovieSaved(false);
			}
		});
	}

	function filterFilms() {
		return isSaveMoviesList.filter(film => {
			if (isCheckboxMovie) {
				return (
					film.duration <= 40 &&
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
			setSaveMoviesList(filterFilms());
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
			<SavedMovieCardList
				isOutputFilms={isSaveMoviesList}
				isSaveMoviesList={isSaveMoviesList}
				deleteMovie={deleteMovie}
			></SavedMovieCardList>
		</section>
	);
}

export default SavedMovies;
