import './App.scss';
import { Header } from './header/Header';
import { Hero } from './hero/Hero';

function App() {
  return (
    <div className="App">
    {console.log(document.getElementsByClassName('hero__content'))}
      <section className="hero__section">
        <Header />
        <Hero />
      </section>
    </div>
  );
}

export default App;
