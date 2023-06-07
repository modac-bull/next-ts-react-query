type ModalType = {
  id: string;
  component: React.ElementType | null;
  title?: string;
  message?: string;
  onSubmit?: () => void;
  onClose?: () => void;
  size?: 'lg' | 'md';
  props?: Record<string, any>;
};

export type { ModalType };
