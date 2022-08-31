import { useEffect, useState } from 'react';
import LoadingStartApp from './screens/loadingStartApp';
import NavigationMain from './navigation/navigation';
import 'react-native-gesture-handler';
import { store } from './redux/store'
import { Provider } from 'react-redux';
import { firebase } from './Services/Firebase';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

export default function App() {
  const [loading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000)
  }, [])

  return (
    <Provider store={store}>
      {loading === false ? (
        <NavigationMain />
      ) : (
        <LoadingStartApp />
      )}
    </Provider>

  );
}
