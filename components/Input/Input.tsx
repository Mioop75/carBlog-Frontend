import { forwardRef } from 'react';
import { IInput } from './Input.interface';

const Input = forwardRef<HTMLInputElement, IInput>(
	({ error, id, type = 'text', label, ...rest }, ref) => {
		return (
			<div ref={ref}>
				<label htmlFor={id} className="form-label">
					{label}
				</label>
				<input
					type={type}
					className={`form-control ${error && 'is-invalid'}`}
					id={id}
					{...rest}
				/>
				{error && (
					<div id={id} className="invalid-feedback">
						{error?.message}
					</div>
				)}
			</div>
		);
	}
);

export default Input;
