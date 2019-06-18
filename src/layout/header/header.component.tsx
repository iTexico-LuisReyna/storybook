import React from 'react';

type HeaderComponentProps = {
  username: string;
};

export const HeaderComponent = ({ username }: HeaderComponentProps) => {
  return (
    <div className="header__container">
      <div className="header__logo">
        <img
          src="http://www.norrislakemarinas.org/wp-content/themes/norris/img/logo_placeholder.png"
          alt="logo"
        />
      </div>
      <div className="header__user">
        <span>{username}</span>
      </div>
    </div>
  );
};
