import React, { useCallback } from 'react';
import validator from 'validator';
export function useForm() {
	const [values, setValues] = React.useState({});
	const [isButtonInactive, setButtonInactive] = React.useState(false);

	const handleChange = event => {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		setValues({ ...values, [name]: value });
	};

	return {
		values,
		handleChange,
		setValues,
		isButtonInactive,
		setButtonInactive,
	};
}

export function isValid(e, setValid) {
	if (e.target.validity.valid) {
		setValid({
			invalid: false,
			errorText: '',
		});
	} else {
		setValid({
			invalid: true,
			errorText: e.target.validationMessage,
		});
	}
}
