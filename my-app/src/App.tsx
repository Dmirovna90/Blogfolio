import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddPost from './Components/AddPost/AddPost';
import Home from './Pages/Home/Home';
import Layout from './Pages/Layout/Layout';
import Posts from './Pages/Posts/Posts';
import Post from './Pages/Post/Post';

const App = () => {

  return (
   <>
    <Routes>
        <Route path='/' element= {<Layout />}>
          <Route path='/' element = {<Home />}>Home</Route>
          <Route path='/add-post' element = {<AddPost />}>Add Post</Route>
          <Route path = "/posts" element = {<Posts />} />
          <Route path = "/posts/:result" element = {<Post />} />
       </Route>
    </Routes>
   </>
   
  )
}

export default App
