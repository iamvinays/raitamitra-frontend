import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Header from './components/Header';
import Footer from './components/Footer';

const MainRouter = () => (
    <div>
        <Header />
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/products" component={Products}></Route>
        </Switch>
        <Footer />
    </div>
);

export default MainRouter;