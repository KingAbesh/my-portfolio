import * as React from "react";
import { ChakraProvider, Box, theme, Text, Flex } from "@chakra-ui/react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { Home } from "./containers/Home/Home";
import "./App.css";
import { Projects } from "./containers/Projects/Projects";

export const App = () => {
  const routes = [
    { path: "/", name: "Home", Component: Home },
    { path: "/projects", name: "Home", Component: Projects },
  ];
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center">
        <BrowserRouter>
          <Switch>
            {routes.map(({ path, Component }) => (
              <Route key={path} exact={true} path={path}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={{ enter: 300, exit: 150 }}
                    unmountOnExit
                  >
                    <Component />
                  </CSSTransition>
                )}
              </Route>
            ))}
            <Redirect from="*" to="/" />
            <Route
              render={() => (
                <Flex justify="center" align="center" h="100vh">
                  <Text fontFamily="Poppins" fontWeight="bold" color="white">
                    Oops, this page does not exist
                  </Text>
                </Flex>
              )}
            />
          </Switch>
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
};
