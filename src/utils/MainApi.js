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
