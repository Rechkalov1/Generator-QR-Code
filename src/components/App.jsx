import { Div, Input } from './App.module';
import QRCode from 'react-qr-code';
import { useState } from 'react';
function App() {
  const [inputValue, setIntputValue] = useState('');
  return (
    <Div className="container mx-auto w-2/4">
      <h1>Содержимое QR-Code</h1>
      <Input
        onChange={e => setIntputValue(e.target.value)}
        type="text"
        placeholder="Введите ссылку для Qr-Code"
      />
      <div>
        <QRCode value={inputValue} />
      </div>
    </Div>
  );
}
export default App;
