import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWIthPrevState from './components/StatefulGreetingWIthPrevState';
import StatefulGreetingWithPrevStateWithIncrement from './components/StatefulGreetingWIthPrevStateWithIncrement';
import StatefulGreetingWithPrevStateWithIncrementFix from './components/StatefulGreetingWIthPrevStateWithIncrement';


function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting= "Nice to meet you!" name = "Mike" age= "32"/>
      <StatefulGreeting greeting="I'm a stateful class component!" name="Mike"/>
      <StatefulGreetingWithCallback greeting="I'm a stateful class component with callback function!" name="Mike"/>
      <StatefulGreetingWIthPrevState greeting="I'm a stateful class component with callback function and previous value return!" name="Mike"/>
      <StatefulGreetingWithPrevStateWithIncrement greeting="I'm a stateful class component with callback function with increment!" name="Mike"/>
      <StatefulGreetingWithPrevStateWithIncrementFix greeting="I'm a stateful class component with callback function with increment Fix!" name="Mike"/>
    </div>
  );
};

export default App;
