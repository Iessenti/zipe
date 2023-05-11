import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Redirect } from 'react-router-dom';
import { logoutFromAccountAction } from "store/actions";
import { routes } from "routes";

export const SignOutPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.clear();
        dispatch(logoutFromAccountAction())
    })

    return <Redirect to={routes.login}/>

}