import LayoutWeb from "../Components/Layouts/Layout";
import Home from "./Home";
import About from "./About";
import WordCloud from "./WordCloud";
import Banner from "../Components/Elements/slider/Galeri";
import Carousel from "../Components/slider_soda-main/Caraousel";

const Main = () => {
    return <LayoutWeb>
        <section id="home">
            <Home />
        </section>
        <section id="about">
            <About/>
        </section>
        <section id="wordcloud">
            <WordCloud />
        </section>
        <section id="project">
            <Carousel />
        </section>
        <section id="banner">
            <Banner />
        </section>
    </LayoutWeb>
};

export default Main;