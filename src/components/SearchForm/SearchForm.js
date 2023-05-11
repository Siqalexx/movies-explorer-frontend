import { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({
	isSearchInput,
	setSearchInput,
	isCheckboxMovie,
	setCheckboxMovie,
	searchSubmit,
}) {
	return (
		<div className='searchForm'>
			<form className='searchForm__label'>
				<div className='searchForm__loop'></div>
				<input
					value={isSearchInput}
					onChange={e => {
						setSearchInput(e.target.value);
					}}
					required
					className='searchForm__input'
					type='text'
					placeholder='Фильм'
				></input>
				<button
					type='submit'
					onClick={e => {
						e.preventDefault();
						searchSubmit();
					}}
					className='searchForm__find'
				></button>
			</form>
			<FilterCheckbox
				isCheckboxMovie={isCheckboxMovie}
				setCheckboxMovie={setCheckboxMovie}
			></FilterCheckbox>
		</div>
	);
}

export default SearchForm;
