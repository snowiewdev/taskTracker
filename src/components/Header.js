import Button from './Button';
import { useLocation } from 'react-router-dom';

function Header({ onAdd, showAdd }) {
  const location = useLocation();

  return (
    <div className="header">
      <h1> Task Tracker </h1>
      { location.pathname === '/' && (
        <Button 
          onClick={onAdd} 
          color={ showAdd ? '#ee6c4d' : '#2068A8'}
          text={ showAdd ? 'Close' : 'Add' }
        />
      )}
    </div>
  )
}

export default Header;
