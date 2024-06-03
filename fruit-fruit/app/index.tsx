import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  // return <WebView source={{ uri: "https://duruduru.netlify.app/" }} />;
  return (
    <>
      <div> fruit fruit 앱 입니다.</div>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
