import './App.css';
import Logins from './components/Logins.jsx';
import Profile  from './components/Profile.jsx';
import UserContextProvider from './contex/UserContextProvider.jsx';
function App() {

  return (
    <UserContextProvider >
      <h1> Context provide in  react  jsx </h1>
      <Logins />
      <Profile />

    </UserContextProvider>
  )
}
export default App
