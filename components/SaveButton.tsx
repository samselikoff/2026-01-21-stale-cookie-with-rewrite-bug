'use client';

import { useFormStatus } from 'react-dom';
import { ComponentProps } from 'react';

export function SaveButton(props: ComponentProps<'button'>) {
  const { pending } = useFormStatus();

  return (
    <button
      data-pending={pending ? '' : undefined}
      {...props}
      disabled={pending}
    />
  );
}
