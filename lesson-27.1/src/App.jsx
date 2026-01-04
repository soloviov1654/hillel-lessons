import { ThemeContext, themes } from "./themeContext";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";
import Contacts from "./components/Contacts";
import NotFound from "./components/NotFound";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  const theme = useState(themes.orange);
  const [currentTheme] = theme;
  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <ErrorBoundary>
          <div
            className="content"
            style={{ background: currentTheme.backgroundColor }}
          >
            <Header />
            <main>
              <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Main />} />
                <Route path="/todo-list" element={<TodoList />} />
                <Route path="/contacts" element={<Contacts />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </ErrorBoundary>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
