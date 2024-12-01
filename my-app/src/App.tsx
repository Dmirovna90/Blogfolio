import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddPost from './Components/AddPost/AddPost';
import Home from './Pages/Home/Home';
import Layout from './Pages/Layout/Layout';
import Posts from './Pages/Posts/Posts';
import Post from './Pages/Post/Post';
import SignUp from './Pages/SignUp/SignUp';
import SuccessfulConfirmation from './Pages/SuccessfulConfirmation/SuccessfulConfirmation';
import SignIn from './Pages/SignIn/SignIn';
import Success from './Pages/Success/Success';

const App = () => {

  return (
   <>
    <Routes>
        <Route path='/' element= {<Layout />}>
          <Route path='/' element = {<Home />}>Home</Route>
          <Route path='/add-post' element = {<AddPost />}>Add Post</Route>
          <Route path = "/posts" element = {<Posts />} />
          <Route path = "/posts/:result" element = {<Post />} />
          <Route path = "/sign-up" element = {<SignUp />} />
          <Route path = "/successfully" element = {<SuccessfulConfirmation/>} />
          <Route path = "/sign-in" element = {<SignIn />} />
          <Route path = "/success" element = {<Success />} />

       </Route>
    </Routes>
   </>
   
  )
}

export default App
