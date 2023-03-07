import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Content from "./Content";
import style from "./Home.module.css";

const Home = () => {
  return (
    <div className={style.cont}>
      <div>
        <section>
          <NavBar />
        </section>
        <section>
          <Content />
        </section>
      </div>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
