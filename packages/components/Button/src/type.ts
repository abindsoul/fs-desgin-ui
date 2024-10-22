export type ButtonType = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type ButtonSize = 'small' | '' | 'large';
export type ButtonShape = 'square' | 'round' | 'circle';

export interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  round?: boolean;
  circle?: boolean;
  plain?: boolean;
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
}
