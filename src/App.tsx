import * as React from "react";
import {
  ChakraProvider,
  Box,
  theme,
  Text,
  Flex,
  Image,
} from "@chakra-ui/react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./App.css";
import loader from "./assets/images/loader.gif";

const Home = React.lazy(() => import("./containers/Home/Home") as any);
const Projects = React.lazy(
  () => import("./containers/Projects/Projects") as any
);

export const App = () => {
  const routes = [
    {
      path: "/",
      name: "Home",
      Component: Home,
    },
    {
      path: "/projects",
      name: "Home",
      Component: Projects,
    },
  ];
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center">
        <React.Suspense
          fallback={
            <Flex w="100vw" h="100vh" align="center" justify="center">
              <Image src={loader} />
            </Flex>
          }
        >
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
        </React.Suspense>
      </Box>
    </ChakraProvider>
  );
};
