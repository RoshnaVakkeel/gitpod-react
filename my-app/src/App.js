import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWIthPrevState from './components/StatefulGreetingWIthPrevState';
import StatefulGreetingWithPrevStateWithIncrement from './components/StatefulGreetingWIthPrevStateWithIncrement';
import StatefulGreetingWithPrevStateWithIncrementFix from './components/StatefulGreetingWIthPrevStateWithIncrement';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';
import EventBinding from './components/EventBinding'
import ConditionalRenderingClass from './components/ConditionalRendering';

function App() {
  return (
    <div className="App">
      <ConditionalRenderingClass />
      <EventsFunctional />
      <EventsClass />
      <EventBinding />
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
