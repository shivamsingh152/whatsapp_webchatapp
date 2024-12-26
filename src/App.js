import './App.css';
import { init } from '@instantdb/react';
import { WhatsAppClone } from './components/WhatsAppClone';

function App() {
  
  init({
    appId: 'da5521ea-76d2-4875-a08b-2f5247a0cc69', //InstantDB app ID
  });

  return <WhatsAppClone />;
}

export default App;
