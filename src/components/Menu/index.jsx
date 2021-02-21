import P from 'prop-types';
import { useState } from 'react';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';

import * as Styled from './styles';
import { NavLinks } from '../NavLinks';
import { LogoLink } from '../LogoLink';
import { useEffect } from 'react';

export const Menu = ({ links = [], logoData }) => {
  const [visible, setVisible] = useState(true);
  const [buttonHidden, setButtonHidden] = useState(true);

  useEffect(() => {
    const windowResizeFn = () => {
      const { innerWidth } = window;

      if (innerWidth <= 768) {
        setButtonHidden(false);
      } else {
        setButtonHidden(true);
      }
    };

    window.addEventListener('resize', windowResizeFn);

    return () => window.removeEventListener('resize', windowResizeFn);
  }, []);

  useEffect(() => {
    const windowResizeFn = (e) => {
      const { innerWidth } = e.target;

      if (innerWidth <= 768 && visible) {
        setVisible(false);
      }

      if (innerWidth > 768 && !visible) {
        setVisible(true);
      }
    };

    window.addEventListener('resize', windowResizeFn);

    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => window.removeEventListener('resize', windowResizeFn);
  }, [visible]);

  return (
    <>
      <Styled.Button
        onClick={() => setVisible(true)}
        aria-label="Open/Close Menu"
        visible={visible}
        aria-hidden={buttonHidden}
      >
        {visible ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </Styled.Button>
      <Styled.Container visible={visible} aria-hidden={!visible}>
        <Styled.MenuContainer onClick={() => setVisible(false)}>
          <LogoLink {...logoData} />
          <NavLinks links={links} />
        </Styled.MenuContainer>
      </Styled.Container>
    </>
  );
};

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes),
};