// import logo from './logo.svg';
import "./App.css";

// import Greet from "./components/BasicReact/Greet";
// import Welcome from "./components/BasicReact/Welcome";
// import Hello from "./components/BasicReact/Hello";
// import Message from "./components/BasicReact/Message";
// import Counter from "./components/BasicReact/Counter";
// import FunctionClick from "./components/BasicReact/FunctionClick";
// import ClassClick from "./components/BasicReact/ClassClick";
// import EventBind from "./components/BasicReact/EventBind";
// import ParentComponent from "./components/BasicReact/ParentComponent";
// import UserGreeting from "./components/BasicReact/UserGreeting";
// import NameList from "./components/BasicReact/NameList";
// import StyleSheet from "./components/BasicReact/StyleSheet";
// import Inline from "./components/BasicReact/Inline";
// import "./appStyles.css";
// import styles from "./appStyles.module.css";
// import Form from "./components/BasicReact/Form";
// import LifeCycleA from "./components/ComponentLifeCycle/LifeCycleA";
// import FragmentDemo from "./components/AdvancedReact/FragmentDemo";
// import Table from "./components/AdvancedReact/Table";
// import ParentComponent from "./components/AdvancedReact/ParentComponent";
// import RefsDemo from "./components/AdvancedReact/RefsDemo";
// import FocusInput from "./components/AdvancedReact/FocusInput";
// import Hero from "./components/AdvancedReact/Hero";
// import ErrorBoundary from "./components/AdvancedReact/ErrorBoundary";
// import ClickCounter from "./components/AdvancedReact/ClickCounter";
// import HoverCounter from "./components/AdvancedReact/HoverCounter";
// import ClickCounterTwo from "./components/AdvancedReact/ClickCounterTwo";
// import HoverCounterTwo from "./components/AdvancedReact/HoverCounterTwo";
// import User from "./components/AdvancedReact/User";
// import Counter from "./components/AdvancedReact/Counter";
import ComponentC from "./components/AdvancedReact/ComponentC";
import { UserProvider } from "./components/AdvancedReact/userContext";

function App() {
  return (
    <div className="App">
      <UserProvider value="Sanmitha">
      <ComponentC />
      </UserProvider>

      {/* <ClickCounterTwo /> */}
      {/* <HoverCounterTwo /> */}
      {/* <User render={(isLoggedIn) => (isLoggedIn ? "Sanmitha" : "Guest")} /> */}

      {
        //if we want to send function as children
        /* <Counter>
        {(count, onIncrementCount) => (
          <ClickCounterTwo count={count} onIncrementCount={onIncrementCount} />
        )}
      </Counter>
      <Counter>
        {(count, onIncrementCount) => (
          <HoverCounterTwo count={count} onIncrementCount={onIncrementCount} />
        )}
      </Counter> */
      }

      {
        // if we want to send function as prop with name render
        /* <Counter
        render={(count, onIncrementCount) => (
          <ClickCounterTwo count={count} onIncrementCount={onIncrementCount} />
        )}
      />
      <Counter
        render={(count, onIncrementCount) => (
          <HoverCounterTwo count={count} onIncrementCount={onIncrementCount} />
        )}
      /> */
      }
      {/* <ClickCounter /> */}
      {/* <HoverCounter /> */}
      {/* <ErrorBoundary>
        <Hero heroName="Bat Man" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Super Man" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComponent /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <LifeCycleA /> */}
      {/* <Form /> */}
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* <h1 className="error">error</h1> */}
      {/* <Inline /> */}
      {/*appStyles.css file can be appled to all components in App.js file. appStyles.module.js file will not be applied to all components in App.js filr */}
      {/* <StyleSheet primary={true} /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick/> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Sanmitha" heroName="Super Women">
        <p>This is a children prop of sanmitha</p>
      </Greet> */}
      {/* <Greet name="Sindhu" heroName="Bumber Women">
        <button>Sindhu</button>
      </Greet> */}
      {/* <Greet name="Sahithi" heroName="Jumper Women" /> */}
      {/* <Welcome name="Sanmitha" heroName="Super Women">
        <p>This is sanmitha's children props</p>
      </Welcome> */}
      {/* <Welcome name="Sindhu" heroName="Bumber Women" /> */}
      {/* <Welcome name="Sahithi" heroName="Jumper Women" /> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
