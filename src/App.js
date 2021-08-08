import "./App.css";
import { Route, Switch, HashRouter } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.component";
import QuizPage from "./pages/quizPage/quizPage.component";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/quiz" exact component={QuizPage} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
