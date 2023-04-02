class Api {
	_getResponseData(res) {
		if (!res.ok) {
			return Promise.reject(`Ошибка: ${res.status}`);
		}
		return res.json();
	}
	signUp(email, password, name) {
		return fetch('https://api.project-movie.nomoredomains.work/signup', {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify({
				email: email,
				password: password,
				name: name,
			}),
			credentials: 'include',
		})
			.then(res => {
				return this._getResponseData(res);
			})
			.catch(err => {
				console.log(err);
			});
	}

	signIn(email, password) {
		return fetch('https://api.project-movie.nomoredomains.work/signin', {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify({
				email: email,
				password: password,
			}),
			credentials: 'include',
		})
			.then(res => {
				return this._getResponseData(res);
			})
			.catch(err => {
				console.log(err);
			});
	}

	changeInfoProfile(email, name) {
		return fetch('https://api.project-movie.nomoredomains.work/users/me', {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'PATCH',
			body: JSON.stringify({
				email: email,
				name: name,
			}),
			credentials: 'include',
		})
			.then(res => {
				return this._getResponseData(res);
			})
			.catch(err => {
				console.log(err);
				return Promise.reject(err);
			});
	}

	getUser() {
		return fetch('https://api.project-movie.nomoredomains.work/users/me', {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'GET',
			credentials: 'include',
		})
			.then(res => {
				return this._getResponseData(res);
			})
			.catch(err => {
				console.log(err);
			});
	}

	getSaveMovies() {
		return fetch('https://api.project-movie.nomoredomains.work/movies', {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'GET',
			credentials: 'include',
		})
			.then(res => {
				return this._getResponseData(res);
			})
			.catch(err => {
				console.log(err);
			});
	}

	setMovie(
		country,
		director,
		duration,
		year,
		description,
		image,
		trailer,
		nameRU,
		nameEN,
		thumbnail,
		movieId,
	) {
		return fetch('https://api.project-movie.nomoredomains.work/movies', {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify({
				country: country,
				director: director,
				duration: duration,
				year: year,
				description: description,
				image: `https://api.nomoreparties.co${image}`,
				trailer: trailer,
				nameRU: nameRU,
				nameEN: nameEN,
				thumbnail: `https://api.nomoreparties.co${thumbnail}`,
				movieId: movieId,
			}),
			credentials: 'include',
		})
			.then(res => {
				return this._getResponseData(res);
			})
			.catch(err => {
				console.log(err);
			});
	}

	deleteMovie(id) {
		return fetch(`https://api.project-movie.nomoredomains.work/movies/${id}`, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'DELETE',
			credentials: 'include',
		})
			.then(res => {
				return this._getResponseData(res);
			})
			.catch(err => {
				console.log(err);
			});
	}

	logout() {
		return fetch('https://api.project-movie.nomoredomains.work/signout', {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'GET',
			credentials: 'include',
		})
			.then(res => {
				return this._getResponseData(res);
			})
			.catch(err => {
				console.log(err);
			});
	}
}
export const api = new Api();
