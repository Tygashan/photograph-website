import "./Home.css";
import Footer from "./Footer";
import zeey from "./zeey.jpg"
const Home = () => {
    return (
        <div>
            <div id="Home">
                <div className="home">
                    <h1>Photography is not just a skill to me its a hobby</h1>
                    <p>Taking pictures to others it may seem not a good leisure thing but truth is it can even be a side hustle of an individual .</p>
                    <p>The seriousness you take when undergoing this other skills you ought to do the same with photography</p>
                </div>
                <img src={zeey} alt="pic"/>
            </div>
            <Footer />
        </div>
    )
}

export default Home;
