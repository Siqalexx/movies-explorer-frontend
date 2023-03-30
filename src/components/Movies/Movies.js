import { useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function Movies() {
	const [isListCards, setListCards] = useState({
		cards: [
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
			{
				title: '34 слова о дизайне',
				duration: '1ч 47м',
				photoLink:
					'https://speedcam.online/wp-content/uploads/2019/11/photo_2019-11-07_14-27-54.jpg',
			},
			{
				title: '35 слова о дизайне',
				duration: '1ч 47м',
				photoLink:
					'https://speedcam.online/wp-content/uploads/2019/11/photo_2019-11-07_14-27-54.jpg',
			},
			{
				title: '36 слова о дизайне',
				duration: '1ч 47м',
				photoLink:
					'https://speedcam.online/wp-content/uploads/2019/11/photo_2019-11-07_14-27-54.jpg',
			},
			{
				title: '37 слова о дизайне',
				duration: '1ч 47м',
				photoLink:
					'https://speedcam.online/wp-content/uploads/2019/11/photo_2019-11-07_14-27-54.jpg',
			},
			{
				title: '38 слова о дизайне',
				duration: '1ч 47м',
				photoLink:
					'https://speedcam.online/wp-content/uploads/2019/11/photo_2019-11-07_14-27-54.jpg',
			},
			{
				title: '39 слова о дизайне',
				duration: '1ч 47м',
				photoLink:
					'https://speedcam.online/wp-content/uploads/2019/11/photo_2019-11-07_14-27-54.jpg',
			},
			{
				title: '40 слова о дизайне',
				duration: '1ч 47м',
				photoLink:
					'https://speedcam.online/wp-content/uploads/2019/11/photo_2019-11-07_14-27-54.jpg',
			},
			{
				title: '41 слова о дизайне',
				duration: '1ч 47м',
				photoLink:
					'https://speedcam.online/wp-content/uploads/2019/11/photo_2019-11-07_14-27-54.jpg',
			},
			{
				title: '42 слова о дизайне',
				duration: '1ч 47м',
				photoLink:
					'https://speedcam.online/wp-content/uploads/2019/11/photo_2019-11-07_14-27-54.jpg',
			},
			{
				title: '43 слова о дизайне',
				duration: '1ч 47м',
				photoLink:
					'https://speedcam.online/wp-content/uploads/2019/11/photo_2019-11-07_14-27-54.jpg',
			},
			{
				title: '44 слова о дизайне',
				duration: '1ч 47м',
				photoLink:
					'https://speedcam.online/wp-content/uploads/2019/11/photo_2019-11-07_14-27-54.jpg',
			},
			{
				title: '45 слова о дизайне',
				duration: '1ч 47м',
				photoLink:
					'https://speedcam.online/wp-content/uploads/2019/11/photo_2019-11-07_14-27-54.jpg',
			},
		],
		cardsShow: 12,
	});
	return (
		<section className='movies'>
			<SearchForm></SearchForm>
			<MoviesCardList
				isListCards={isListCards}
				setListCards={setListCards}
			></MoviesCardList>
		</section>
	);
}

export default Movies;
