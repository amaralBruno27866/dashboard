import style from '../styles/App.module.css'
import '../styles/global.css'
import { Content } from './Content'
import { Sidebar } from './Sidebar'

export function App() {

  return (
    <div className={style.app}>
      <Sidebar />
      <Content />
    </div>
  )
}
