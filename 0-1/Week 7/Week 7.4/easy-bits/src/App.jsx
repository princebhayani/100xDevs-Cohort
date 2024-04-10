
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from './atoms'

function App(){
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationsAtomCount = useRecoilValue(notificationsAtom);
  const [messagingAtomCount, setMessagingAtomCount] = useRecoilState(messagingAtom);

  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <button>Home</button>

      <button>My network ({networkNotificationCount >=100 ? "99+" : networkNotificationCount})</button>
      <button>jobs ({jobsAtomCount})</button>
      <button>Messages ({ messagingAtomCount })</button>
      <button>Notifications ({notificationsAtomCount})</button>

      <button onClick={ ()=>{
        setMessagingAtomCount(c=>c+1)
      }}>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App
