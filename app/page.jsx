
import Header from '../components/Header';
import Authors from '../components/Homepage/Authors';
import BestSeller from '../components/Homepage/BestSeller';
import Hero from '../components/Homepage/Hero';
import Recomended from '../components/Homepage/Recomended';

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <BestSeller></BestSeller>
      <Authors></Authors>
      <Recomended></Recomended>
    </div>
  );
}
