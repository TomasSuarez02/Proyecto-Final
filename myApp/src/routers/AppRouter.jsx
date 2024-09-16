import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage, HomePage, EmployeesPage, UsersPage, NotFoundPage } from '../pages';
import {PublicLayout, PrivateLayout} from '../layouts';
import { PrivateRouter } from ".";


const AppRouter = () => {
    return (
        <Router>
            <Routes>

                {/*Rutas Publicas*/}
                <Route path="/" element={<PublicLayout/>}>
                    <Route path="/" element={<LoginPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Route>

                {/*Rutas Privadas*/}
                <Route path="/" element={<PrivateRouter><PrivateLayout/></PrivateRouter>}>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path="/employees" element={<EmployeesPage/>}/>
                    <Route path="/users" element={<UsersPage/>}/>
                </Route>

            </Routes>
        </Router>
    );
}

export default AppRouter;