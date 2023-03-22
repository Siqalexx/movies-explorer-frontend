import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
	return (
		<div className='searchForm'>
			<div className='searchForm__label'>
				<div className='searchForm__loop'></div>
				<input
					className='searchForm__input'
					type='text'
					placeholder='Фильм'
				></input>
				<button
					onClick={() => {
						console.log(1);
					}}
					className='searchForm__find'
				></button>
			</div>
			<FilterCheckbox></FilterCheckbox>
		</div>
	);
}

export default SearchForm;
