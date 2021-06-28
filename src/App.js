// import logo from './logo.svg';
import React, {useReducer} from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterFour from './components/HookCounterFour';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import HookContextComponentA from './components/HookContextComponentA';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import DataFetchUseState from './components/DataFetchUseState';
import DataFetchUseReducer from './components/DataFetchUseReducer';

// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

// export const CountContext = React.createContext()

// const initialState = 0
// const reducer = (state, action) => {
//     switch(action) {
//         case 'increment':
//             return state + 1
//         case 'decrement':
//             return state - 1
//         case 'reset':
//             return initialState
//         default:
//             return state        
//     }
// }

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <DataFetchUseReducer />
    // <DataFetchUseState />
      // <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
      //   <div className="App">
      //     count - {count}
      //     <ComponentA />
      //     <ComponentB />
      //     <ComponentC />
      //   </div>
      // </CountContext.Provider>
     
  );
}

export default App;
