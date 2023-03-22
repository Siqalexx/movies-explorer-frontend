import { useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies() {
	const cards = [
		{
			title: '33 слова о дизайне',
			duration: '1ч 47м',
			photoLink:
				'https://speedcam.online/wp-content/uploads/2019/11/photo_2019-11-07_14-27-54.jpg',
		},
		{
			title: '32 слова о дизайне',
			duration: '1ч 47м',
			photoLink:
				'https://speedcam.online/wp-content/uploads/2019/11/photo_2019-11-07_14-27-54.jpg',
		},
		{
			title: '31 слова о дизайне',
			duration: '1ч 47м',
			photoLink:
				'https://speedcam.online/wp-content/uploads/2019/11/photo_2019-11-07_14-27-54.jpg',
		},
		{
			title: '30 слова о дизайне',
			duration: '1ч 47м',
			photoLink:
				'https://speedcam.online/wp-content/uploads/2019/11/photo_2019-11-07_14-27-54.jpg',
		},
	];

	return (
		<section className='movies'>
			<SearchForm></SearchForm>
			<MoviesCardList isListCards={cards}></MoviesCardList>
		</section>
	);
}

export default SavedMovies;
