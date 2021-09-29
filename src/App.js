import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { themePlk, designTokensPlk } from "@rbilabs/components-library";
import Home from "./pages/Home";
import About from "./pages/About";

const theme = {
  ...themePlk,
  token(tokenName) {
    return designTokensPlk[tokenName];
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
