import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'


//  como o arquivo já esta com o nome "index.js" então não precisa inserir o mesmo aqui no diretorio
import Homepage from '../pages/HomePage/index'
import RedirectPage from '../pages/RedirectPage'
import StatsPage from '../pages/StatsPage'
import NotFoundPage from '../pages/NotFoundPage'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Homepage} /> 
                <Route exact path="/:code" component={RedirectPage} />
                <Route exact path="/:code/stats" component={StatsPage} />
                <Route exact path="/*" component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes