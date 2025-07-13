import { BrowserRouter,Route, Routes } from "react-router-dom"

import LoginForm from "./components/LoginForm"
import SignupForm from "./components/SignupForm"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
