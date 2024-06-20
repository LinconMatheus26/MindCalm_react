import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Cadastro from './Cadastro';
import Agendamento from './Agendamento';
import Diario from './Diario';
import Meditação from './Meditação';
import Caps from './Caps';
import BotaoPanico from './BotaoPanico';

const Stack = createStackNavigator();

const App = () => {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home">
<Stack.Screen name="Home" component={Home} />
<Stack.Screen name="Cadastro" component={Cadastro} />
<Stack.Screen name="Agendamento" component={Agendamento} />
<Stack.Screen name="Diario" component={Diario} />
<Stack.Screen name="Meditação" component={Meditação} />
<Stack.Screen name="Caps" component={Caps} />
<Stack.Screen name="BotaoPanico" component={BotaoPanico} />
</Stack.Navigator>
</NavigationContainer>
);
};

export default App;