import React from 'react';

export interface IButtonProps {
  children?: React.ReactNode;
  handleClick?: (e: any) => void;
  disabled?: boolean;
  color?: string;
}

export const ButtonComponent = ({ children, handleClick, disabled, color }: IButtonProps) => {
  const styles = {
    border: '1px solid #eee',
    borderRadius: 3,
    backgroundColor: '#FFFFFF',
    cursor: 'pointer',
    fontSize: 15,
    padding: '3px 10px',
    margin: 10,
    color,
  };

  return (
    <button onClick={handleClick} style={styles} type="button" disabled={disabled}>
      {children}
    </button>
  );
};

ButtonComponent.defaultProps = {
  children: null,
  onClick: () => {},
  color: '#000',
};
