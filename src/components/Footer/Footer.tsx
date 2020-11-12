import React, { FC } from 'react';
import s from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={s.root}>
      <div className={s.wrapper}>
        <span className={s.text} role="img" aria-label="Make with love">
          Make with ❤️
        </span>
        <p className={s.text}>Ours team</p>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
