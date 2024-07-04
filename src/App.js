import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import datamain from "./components/data"
import Service from "./components/Service";
import Contact from "./components/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navigation />
                <Routes >
                    <Route>
                        <Route path="" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="gallery" element={<Gallery heading={datamain.heading} title={datamain.title} data={datamain.data} />} />
                        <Route path="service" element={<Service />} />
                        <Route path="Contact" element={<Contact />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );


}

export default App;
