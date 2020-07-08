

import React from 'react';

import {LayoutsNavigator} from '../MediMapsFinal/crs/navigation/layoutNavigator';
import { NavigationContainer } from '@react-navigation/native';






const App=()=> {
  return (
      <NavigationContainer>
        <LayoutsNavigator />
      </NavigationContainer>
  );
};



export default App;
