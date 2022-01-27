import './style.css';
import RegisterForm from './components/Register-Form'
function App() {
  Error = {

  }

  const Register = (details) => {

  };
  return (
    <div className='container'> 
        <div className = "register-form">
          <RegisterForm Register = {Register} Error={Error} />
        </div>
    </div>
  );
}

export default App;
