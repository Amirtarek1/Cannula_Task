import React from 'react';
import { Provider } from 'react-redux';
import Home_Page from './src/Screens/Home/Home_Page';
import Apply_to_Join from './src/Screens/Auth/Apply_to_Join';
import Choose_box_component from './src/Component/Choose_box_component';
import store from './src/Redux/Store';

const App = () => {
    return (
        <Provider store={store}>
            <Apply_to_Join />
        </Provider>
    );
};

export default App;
