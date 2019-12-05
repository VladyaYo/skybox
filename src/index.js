import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// import { normalize } from 'react-style-reset/string';
// import { createGlobalStyle } from 'styled-components';
//
// const GlobalStyles = createGlobalStyle`
//   ${normalize};
// `;
import './assets/styles/global.scss';

import NotFound from './pages/NotFound';
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import CsGo from "./pages/CsGo";
import Blog from "./pages/Blog";
import Player from "./pages/Player";
import Team from "./pages/Team";
import Tournament from "./pages/Tournament";
import Pricing from "./pages/Pricing";
// import HotPanel from "./partials/HotPanel/HotPanel";
// import AnchorScroll from "./partials/AnchorScroll";


const routes = (
    <Router>
        <ScrollToTop/>
        <Header/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/cs-go" component={CsGo} />
            <Route exact path="/pricing-tournament" component={Tournament} />
            <Route exact path="/pricing-team" component={Team} />
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/pricing-player" component={Player} />
            <Route exact path="/blog" component={Blog} />
            {/*<Route exact path="/download" component={Download} />*/}
            <Route component={NotFound} />
        </Switch>
        <Footer/>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));