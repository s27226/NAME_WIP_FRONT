import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProjectsPage from './views/ProjectsPage';

function App() {
  return (
      <BrowserRouter >
        <Routes>

          <Route index element={<Main />} />
          <Route path="/dodaj-uwage" element={<DodajUwaga />} />
          <Route path="/create-uwage" element={<CreateUwaga />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
