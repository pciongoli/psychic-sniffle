import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
   ApolloClient,
   InMemoryCache,
   ApolloProvider,
   createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Archive from "./pages/Archive";
import Contact from "./pages/Contact";
import Portraits from "./pages/Portraits";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const httpLink = createHttpLink({
   uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
   const token = localStorage.getItem("id_token");

   return {
      headers: {
         ...headers,
         authorization: token ? `Bearer ${token}` : "",
      },
   };
});

const client = new ApolloClient({
   link: authLink.concat(httpLink),
   cache: new InMemoryCache(),
});

function App() {
   return (
      <ApolloProvider client={client}>
         <Router>
            <div>
               <div>
                  <Nav />
                  <Routes>
                     <Route path="/" element={<Home />} />
                     <Route path="/" element={<About />} />
                     <Route path="/" element={<Archive />} />
                     <Route path="/" element={<Contact />} />
                     <Route path="/" element={<Portraits />} />
                     <Route path="/login" element={<Login />} />
                     <Route path="/signup" element={<Signup />} />
                     <Route path="*" element={<NoMatch />} />
                  </Routes>
               </div>
               <Footer />
            </div>
         </Router>
      </ApolloProvider>
   );
}

export default App;
