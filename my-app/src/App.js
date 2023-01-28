import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWIthPrevState from './components/StatefulGreetingWIthPrevState';


function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting= "Nice to meet you!" name = "Mike" age= "32"/>
      <StatefulGreeting greeting="I'm a stateful class component!" name="Mike"/>
      <StatefulGreetingWithCallback greeting="I'm a stateful class component with callback function!" name="Mike"/>
      <StatefulGreetingWIthPrevState greeting="I'm a stateful class component with callback function!" name="Mike"/>
    </div>
  );
};

export default App;
