import datamain from "./data";
import Footer from "./Footer";
import "./Gallery.css";
export default function Gallery({ heading, title, data }) {

    return (
        <div>
            <div id="gallery">
                <h1>Wait for amazement</h1>
                <h2>Capture the beauty</h2>

                {
                    datamain.data.map((result) => {
                        return (
                            <div className="picha" id="kalamu" >
                                <img src={result.image} alt="result gallery" />
                                <p>{result.desc}</p>
                            </div>
                        )
                    })
                }
            </div>
            <Footer />
        </div>
    )
}