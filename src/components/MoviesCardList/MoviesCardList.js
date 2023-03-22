import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ isListCards, setListCards }) {
	const saved = setListCards === undefined ? true : false;
	return (
		<section className='moviesCardList'>
			<div className='moviesCardList__container'>
				{saved
					? isListCards.map((card, index) => {
							return (
								<MoviesCard
									key={index} //пока индекс
									title={card.title}
									duration={card.duration}
									photoLink={card.photoLink}
								/>
							);
					  })
					: isListCards.cards
							.slice(0, isListCards.cardsShow)
							.map((card, index) => {
								return (
									<MoviesCard
										key={index} //пока индекс
										title={card.title}
										duration={card.duration}
										photoLink={card.photoLink}
									/>
								);
							})}
			</div>

			{!saved && (
				<button
					onClick={() => {
						if (isListCards.cardsShow === 12) {
							setListCards({ ...isListCards, cardsShow: 18 });
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
