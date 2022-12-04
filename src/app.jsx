import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import Maker from "./components/maker/maker";
import styles from "./app.module.css";

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login authService={authService} />} />
          <Route path="/maker" element={<Maker authService={authService} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
