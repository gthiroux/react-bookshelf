import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home/Home";
import Profil from "./pages/Profil/Profil";

function App() {
  const [favoriteBook, setFavoriteBook] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                favoriteBook={favoriteBook}
                setFavoriteBook={setFavoriteBook}
              />
            }
          />
          <Route
            path="/profil"
            element={
              <Profil
                favoriteBook={favoriteBook}
                setFavoriteBook={setFavoriteBook}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
