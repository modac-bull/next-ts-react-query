import React, { FocusEventHandler, ForwardedRef } from 'react';
import { FieldError } from 'react-hook-form';

import withInputHandling from './withInputHandling';

interface InputComponentProps {
  name: string;
  inputRef?: any;
  errors?: Record<string, FieldError>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>; // 이 부분 수정
  onBlur?: FocusEventHandler;
}

const InputComponent = React.forwardRef<HTMLInputElement, InputComponentProps>(
  (
    { name, inputRef, errors, onChange, ...props },
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const error = errors && errors[name];

    return (
      <>
        <input
          {...props}
          name={name}
          onChange={onChange}
          ref={inputRef || ref}
        />
        {error && <span>{error.message}</span>}
      </>
    );
  },
);

export default InputComponent;
