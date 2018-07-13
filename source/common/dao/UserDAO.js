import React from 'react';
import {host as HostServer} from '../database.json';
import queryString from 'query-string';

export default class UserDAO {
    static Login(userName, password){
        var data = {
            user_name: userName,
            password: password,
        }

        fetch(HostServer + '/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: data
        })
        .then((response) => response.json() )
        .catch(error => "fail" );
    }
}