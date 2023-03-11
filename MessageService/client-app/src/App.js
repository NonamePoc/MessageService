import React from 'react'
import {
  Home,
  Friends,
  Auth,
  Chats,
  ChatRoom,
  PostDetails,
  Profile,
  EmailConfirmation,
} from './pages'
import { Header, ProfileCard, MenuTab, FriendList } from './components'
import { Route, Routes, Outlet } from 'react-router-dom'

const MainLayout = () => (
  <>
    <Header />
    <div className='wrapper'>
      <div>
        <ProfileCard />
        <MenuTab />
      </div>
      <Outlet />
      <FriendList />
    </div>
  </>
)

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} exact />
          <Route path='/friends' element={<Friends />} exact />
          <Route path='/chat' element={<Chats />} exact />
          <Route path='/chat/1' element={<ChatRoom />} exact />
          <Route path='/post' element={<PostDetails />} exact />
          <Route path='/profile' element={<Profile />} exact />
        </Route>
        <Route path='/auth' element={<Auth />} />
        <Route path='/email-cnfrm' element={<EmailConfirmation />} exact />
      </Routes>
    </>
  )
}

export default App
