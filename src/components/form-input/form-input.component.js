import React from "react";

import './form-input.styles.scss';

const FormImput = ({handleChange, label, ...otherProps}) => (
	<div className='group'>
		<input className='form-input' onChange={handleChange} type="text" {...otherProps} />
		{
			label ?
				(
					<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
						{label}
					</label>
				)
			: null
		}
	</div>
)

export default FormImput;