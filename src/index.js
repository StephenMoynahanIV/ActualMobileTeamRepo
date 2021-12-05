import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  UMass,
  Favorites,
  Places,
  People,
  Posts,
  Post,
  FAQ,
} from "./components";

import { EasybaseProvider } from 'easybase-react';
import ebconfig from './ebconfig';

ReactDOM.render(
  <Router>
    <EasybaseProvider ebconfig={ebconfig}>
    <Navigation />
    <Routes>
      <Route path="/" element={<UMass />} />
      <Route path="/Favorites" element={<Favorites />} />
      <Route path="/Places" element={<Places />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/People" element={<People />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route>
    </Routes>
    <Footer />
    </EasybaseProvider>
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
