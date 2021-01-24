import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  const onClick = () => {
    console.log('clicked')
  }
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='add' onClick = {onClick} />
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
