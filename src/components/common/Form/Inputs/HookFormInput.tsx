import React, { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import InputComponent from './InputComponent';

interface HookFormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const HookFormInput: React.FC<HookFormInputProps> = ({
  name,
  ...inputProps
}) => {
  const { register } = useFormContext();
  const { onChange, onBlur, ref } = register(name);

  return (
    <InputComponent
      {...inputProps}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      ref={ref}
    />
  );
};

export default HookFormInput;
