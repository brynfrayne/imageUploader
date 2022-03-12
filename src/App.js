
import './App.css';
import LoadingCard from './components/LoadingCard/LoadingCard';
import SuccessCard from './components/SuccessCard/SuccessCard';
import UploadCard from './components/UploadCard/UploadCard';

function App() {
  return (
    <div className="App">
      <UploadCard />
      <LoadingCard />
      <SuccessCard />
      <p className='footer'>created by <b>Bryn Frayne</b> - devChallenges.io</p>
    </div>
  );
}

export default App;
