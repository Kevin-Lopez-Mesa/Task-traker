// Creación de un elemento que podemos usar dentro de la aplicación

// con rafce creamos el componente de manera automática


import PropTypes from 'prop-types';

const Header = ({title, year}) => {
  return (
        <div>
            <h1> {title} in {year}</h1>
        </div>
    )
};

Header.defaultProps = {
    title: 'Task Traker',
    year: 2022
}

// PropTypes nos permite asignar un formato a una variable

Header.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.number
}

export default Header;
