import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home.jsx';
import Signup from './Signup.jsx';
import Login from './login.jsx';
import Chat from './chatbot.jsx'

function App() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chat" element={<Chat />} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;