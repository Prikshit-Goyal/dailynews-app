import './App.css';
import React,{useState} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App(){
  const [progress, setProgress] = useState(0)

    return (
      <>
      <BrowserRouter>
        <Navbar heading="Digital News - Top Headlines"/>
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/dailynews-app" element={<News setProgress={setProgress} key="general" pageSize={12} country="in" category="general" heading2="News"/>}/>
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={12} country="us" category="business" heading2="Business News"/>}/>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={12} country="in" category="entertainment" heading2="Entertainment News"/>}/>
          <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={12} country="in" category="health" heading2="Health News"/>}/>
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={12} country="in" category="science" heading2="Science News"/>}/>
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={12} country="in" category="sports" heading2="Sports News"/>}/>
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={12} country="in" category="technology" heading2="Technology News"/>}/>
        
        </Routes>
      </BrowserRouter>
      </>
    )
  }
export default App;


