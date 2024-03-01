import React, {useEffect, useState} from 'react';
import SplashScreen from './app/screens/session1/SplashScreen.tsx';
import YaMap from 'react-native-yamap';
import onboarding1 from './app/ui/Onboarding.tsx';
import onboarding2 from './app/screens/session1/Onboarding1.tsx';
import Navigation from './app/navigation/Navigation.tsx';
import {Provider} from 'react-redux';
import {store} from './app/store/store.ts';

function App(): React.JSX.Element {
  YaMap.init('263a39f9-f08e-4586-8aaa-8dcaea00f4a3');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
