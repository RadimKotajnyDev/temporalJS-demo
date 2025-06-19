import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import {Layout} from "./Layout.tsx";
import {Ukazka1} from "./pages/Ukazka1.tsx";
import {Ukazka2} from "./pages/Ukazka2.tsx";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/1" element={<Ukazka1 />} />
        <Route path="/2" element={<Ukazka2 />} />
      </Route>

    </Routes>
  </BrowserRouter>
)
