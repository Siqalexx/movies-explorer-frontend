class moviesApi {
	_getResponseData(res) {
		if (!res.ok) {
			return Promise.reject(`Ошибка: ${res.status}`);
		}
		return res.json();
	}
	getFilms() {
		return fetch('https://api.nomoreparties.co/beatfilm-movies')
			.then(res => {
				return this._getResponseData(res);
			})
			.catch(err => {
				console.log(err);
			});
	}
}

export const apiMovie = new moviesApi();
