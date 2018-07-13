import React from 'react';

import {StackNavigator} from 'react-navigation';
import login from "./source/component/login";


const Navigation = StackNavigator({
    Login: {screen: login},
});

export default Navigation