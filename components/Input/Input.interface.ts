import { HTMLProps } from 'react';
import { FieldError } from 'react-hook-form';

export interface IInput extends HTMLProps<HTMLInputElement> {
	error?: FieldError;
	label: string;
}
