
import Header from '../components/Header';
import BestSeller from '../components/Homepage/BestSeller';
import Hero from '../components/Homepage/Hero';
import Influencors from '../components/Homepage/Influencors';
import TestimonialsComponentPage from './testimonials-component-01/page';

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <BestSeller></BestSeller>
            <Influencors></Influencors>
      {/* <Authors></Authors> */}
      {/* <BookQuoteSection></BookQuoteSection> */}
      {/* <Recomended></Recomended> */}
      <TestimonialsComponentPage></TestimonialsComponentPage>
    </div>
  );
}
