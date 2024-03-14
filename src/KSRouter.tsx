import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import CoursePage from "./pages/CoursePage";
import DashboardPage from "./pages/DashboardPage";
import { Routes } from './KSRoutes';

export default function KSRouter()
{
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={Routes.Login} render={() => <LoginPage />} />
                <Route exact path={Routes.Home} render={() => <CoursePage />} />
                <Route exact path={Routes.Dashboard} render={() => <DashboardPage />} />
            </Switch>
        </BrowserRouter>
    )
}
