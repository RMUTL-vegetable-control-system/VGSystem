import { useEffect, useState } from 'react';
import Navigator from './navigation/navigationTabMenu';
import LoadingStartApp from './screens/loadingStartApp';
import NavigationMain from './navigation/navigation';
import 'react-native-gesture-handler';

export default function App() {
  const [loading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000)
  }, [])

  return (
    <>
      {loading === false ? (
        <NavigationMain />
      ) : (
        <LoadingStartApp />
      )}
    </>

  );
}
