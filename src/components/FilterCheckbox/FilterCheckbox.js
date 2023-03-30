import { useState } from 'react';

function FilterCheckbox() {
	const [isCheck, setCheck] = useState(false);
	return (
		<div className='filterCheckbox'>
			<span className='filterCheckbox__block'>
				<input
					className='filterCheckbox__checkbox'
					type='checkbox'
					checked={isCheck}
					onChange={() => {}}
				></input>
				<span
					onClick={() => {
						setCheck(!isCheck);
					}}
					className={` filterCheckbox__switch ${
						isCheck ? 'filterCheckbox__switch_check' : ''
					}`}
				></span>
			</span>

			<p className='filterCheckbox__text'>Короткометражки</p>
		</div>
	);
}

export default FilterCheckbox;
