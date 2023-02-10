import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import BookDetail from "./pages/BookDetail";
import { books } from "./data";
import { UserContext } from "./context";
function App() {
  const [userName, setUserName] = useState(
    "Ganaa tailbarlaachee chi chn hicheelee uzeed bsn bzdee"
  );
  return (
    <div className="App">
      <UserContext.Provider value={{ userName, setUserName, books }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/books/:id" element={<BookDetail />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
