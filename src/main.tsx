
import { createRoot } from 'react-dom/client'
import './index.css'

import Lesson08 from './lessons/lesson08/Lesson08.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <>
    {/*<Playground/>
    <Counter/>
   
    <CarShop/>*/}
    
    <App/>
  </>,
)