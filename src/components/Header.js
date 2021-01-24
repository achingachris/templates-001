import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <button className='btn'>Add</button>
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
