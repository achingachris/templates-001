import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}

// styles in js
// const headStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

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
