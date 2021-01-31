import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <p> Copyright &copy; 2021 </p>
      <Link to="/"> App </Link>
      <Link to="/about"> About </Link>
      <a href="https://github.com/snowiewdev/taskTracker" target="_blank"> GitHub </a>
    </footer>
  )
}

export default Footer
