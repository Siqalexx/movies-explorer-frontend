import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
	return (
		<div className='searchForm'>
			<form className='searchForm__label'>
				<div className='searchForm__loop'></div>
				<input
					required
					className='searchForm__input'
					type='text'
					placeholder='Фильм'
				></input>
				<button
					type='submit'
					onClick={() => {
						console.log(1);
					}}
					className='searchForm__find'
				></button>
			</form>
			<FilterCheckbox></FilterCheckbox>
		</div>
	);
}

export default SearchForm;
