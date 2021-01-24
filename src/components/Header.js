import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <header>
      <h1 style={{color: 'red', backgroundColor: 'black'}} >{title}</h1>
    </header>
  )
}

// default props
Header.defaultProps = {
  title: 'Header',
}

// prop types
Header.propTypes = {
  title: PropTypes.string,
  // title: PropTypes.string.isRequired,
}

export default Header
