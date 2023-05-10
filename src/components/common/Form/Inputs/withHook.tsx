import React, { forwardRef } from 'react';
import { RegisterOptions, UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  name: string;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

interface InputWithHookProps extends InputProps {
  register?: (name: string, rules?: RegisterOptions) => UseFormRegisterReturn;
  errors?: any;
  rules?: RegisterOptions;
}

export default function withHook<T extends React.ComponentType<any>>(
  Component: T,
) {
  const WrappedComponent = forwardRef(
    (
      {
        name,
        register,
        errors,
        rules,
        onChange,
        onBlur,
        ...props
      }: InputProps & { register?: any; errors?: any; rules?: any },
      ref: React.ForwardedRef<any>,
    ) => {
      return (
        <>
          <Component
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
            {...(register && register(name, rules))}
            {...props}
          />
          {errors?.[name] && <>{errors[name].message}</>}
        </>
      );
    },
  ) as React.ComponentType<
    React.ComponentPropsWithoutRef<T> & Omit<InputWithHookProps, 'ref'>
  >;

  return WrappedComponent;
}
