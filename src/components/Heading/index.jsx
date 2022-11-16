import P from 'prop-types';
import * as Styled from './styles';

<<<<<<< HEAD
export const Heading = ({
  children,
  colorDark = true,
  as = 'h1',
  size = 'huge',
  uppercase = false,
}) => {
  return (
    <Styled.Title
      colorDark={colorDark}
      as={as}
      size={size}
      uppercase={uppercase}
    >
      {children}
    </Styled.Title>
  );
=======
export const Heading = ({ children, light = false }) => {
  return <Styled.Title light={light}>{children}</Styled.Title>;
>>>>>>> parent of 95f2b68 (Componente de heading)
};

Heading.propTypes = {
  children: P.node.isRequired,
<<<<<<< HEAD
  colorDark: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['small', 'medium', 'big', 'huge']),
  uppercase: P.bool,
=======
  light: P.bool.isRequired,
>>>>>>> parent of 95f2b68 (Componente de heading)
};
