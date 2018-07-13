import React from 'react';
import {host as HostServer} from '../database.json';
import UserDTO from "../dto/UserDTO";

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
        .then(response => {
            return UserDTO(response.json());
        })
        .catch(error => {
            return null;
        })
    }
}