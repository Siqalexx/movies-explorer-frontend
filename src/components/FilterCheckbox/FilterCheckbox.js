function FilterCheckbox({ isCheckboxMovie, setCheckboxMovie }) {
	return (
		<div className='filterCheckbox'>
			<span className='filterCheckbox__block'>
				<input
					className='filterCheckbox__checkbox'
					type='checkbox'
					checked={isCheckboxMovie}
					onChange={() => {}}
				></input>
				<span
					onClick={() => {
						setCheckboxMovie(!isCheckboxMovie);
					}}
					className={` filterCheckbox__switch ${
						isCheckboxMovie ? 'filterCheckbox__switch_check' : ''
					}`}
				></span>
			</span>

			<p className='filterCheckbox__text'>Короткометражки</p>
		</div>
	);
}

export default FilterCheckbox;
