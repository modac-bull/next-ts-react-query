import React, { ComponentType, ForwardedRef, PropsWithoutRef } from 'react';
import { UseFormReturn } from 'react-hook-form';

interface WithInputHandlingProps {
  formMethods?: UseFormReturn<any>;
}

function withInputHandling<P extends object>(
  WrappedComponent: ComponentType<P & WithInputHandlingProps>,
  useForm = true,
): ComponentType<P> {
  const WrappedWithHandling = React.forwardRef(
    (
      props: PropsWithoutRef<P & WithInputHandlingProps>,
      ref: ForwardedRef<any>,
    ) => {
      const { formMethods } = props;
      const { register, formState } = formMethods || {};
      const { errors } = formState || {};
      const inputRef = useForm && register ? register : undefined;

      return (
        <WrappedComponent
          {...(props as P)}
          ref={ref}
          inputRef={inputRef}
          errors={errors}
        />
      );
    },
  ) as unknown as ComponentType<P> & {
    WrappedComponent: ComponentType<P & WithInputHandlingProps>;
  };

  WrappedWithHandling.WrappedComponent = WrappedComponent;
  return WrappedWithHandling;
}

export default withInputHandling;
