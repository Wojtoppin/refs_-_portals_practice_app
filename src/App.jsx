import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1}/>
        <TimerChallenge title="not easy" targetTime={5}/>
        <TimerChallenge title="getting tought" targetTime={10}/>
        <TimerChallenge title="pros only" targetTime={15}/>
      </div>
    </>
  );
}

export default App;
