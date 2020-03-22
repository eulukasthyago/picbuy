import React from  'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Home from './pages/Home';
import Freeimages from './pages/Freeimages';

const Router = () => (
    <BrowserRouter>
        <Header/>
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-2'>
                <Sidebar/>
                </div>
                <div className='col-md-10'>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/products/:id'><h1>Produto especifico</h1></Route>
                        <Route path='/products/'><h1>Todos os produtos</h1></Route>
                        {/* <Route path='/freeimages/:id' component={FullPageFreeImage} />> */}
                        <Route path='/freeimages/' component={Freeimages} />
                        <Route path='/cart'><h1>Carrinho</h1></Route>
                    </Switch>
                </div>
            </div>
        </div>
    </BrowserRouter>
);

export default Router;