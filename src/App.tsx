import './App.css'
import { Temporal } from '@js-temporal/polyfill';

function App() {

  const pragueTime = Temporal.ZonedDateTime.from('2025-06-05T12:00+02:00[Europe/Prague]');
  const tokyoTime = pragueTime.withTimeZone('Asia/Tokyo');

  return (
    <div className="text-xl flex flex-col p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Temporal.js Demo</h1>
      <p className="mb-2">{JSON.stringify(pragueTime)}</p>
      <p className="mb-2">{JSON.stringify(tokyoTime)}</p>
    </div>
  )
}

export default App
