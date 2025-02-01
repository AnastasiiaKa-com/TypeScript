import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import './App.css'

import NoPage from "./components/noPage/NoPage";
import Lesson11 from "./lessons/lesson11/Lesson11";
import Lesson10 from "./lessons/lesson10/Lesson10";
import Lesson09 from "./lessons/lesson09/Lesson09";
import Lesson08 from "./lessons/lesson08/Lesson08";
import Lesson05 from "./lessons/lesson05/Lesson05";
import Lesson04 from "./lessons/lesson04/Lesson04";
import Lesson03 from "./lessons/lesson03/Lesson03";
import Lesson02 from "./lessons/lesson02/Lesson02";
import Lesson01 from "./lessons/lesson01/Lesson01";
import HomePage from "./components/homePage/HomePage";
import FetchFox from "./components/fetchfox/FetchFox";
import Lesson06 from "./lessons/lesson06/lesson06";


function App() {
  return(
    <HashRouter>
    
    <Routes>
       
       <Route path="/" element={<Layout/>}>
       
       <Route path="/" element={<HomePage/>}/>
       <Route path="fetch-fox" element={<FetchFox />} />
       <Route path="lesson-1" element={<Lesson01/>}/>
       <Route path="lesson-2" element={<Lesson02/>}/>
       <Route path="lesson-3" element={<Lesson03/>}/>
       <Route path="lesson-4" element={<Lesson04/>}/>
       <Route path="lesson-5" element={<Lesson05/>}/>
       <Route path="lesson-6" element={<Lesson06/>}/>
       <Route path="lesson-7" element={<h2>Lesson 7</h2>}/>
       <Route path="lesson-8" element={<Lesson08/>}/>
       <Route path="lesson-9" element={<Lesson09/>}/>
       <Route path="lesson-10" element={<Lesson10/>}/>
       <Route path="lesson-11" element={<Lesson11/>}/>
         <Route path="*" element={<NoPage/>}/> 
       </Route>
     </Routes>
   </HashRouter>
  )
}

export default App;
