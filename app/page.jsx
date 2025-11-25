
import BestSeller from '../components/Homepage/BestSeller';
import BookQuoteSection from '../components/Homepage/BookQuoteSection';
import Hero from '../components/Homepage/Hero';
import Influencors from '../components/Homepage/Influencors';
import NewsletterComponent from '../components/Homepage/Newsletter';
import Promo from '../components/Homepage/Promo';
import TestimonialsComponentPage from '../components/testimonials-component-01/page';

export default function Home() {
  return (
    <div>
      
      <Hero></Hero>
      <BestSeller></BestSeller>
      <Promo></Promo>
      <Influencors></Influencors>
      {/* <Authors></Authors> */}
      <BookQuoteSection></BookQuoteSection>
      {/* <Recomended></Recomended> */}
      <TestimonialsComponentPage></TestimonialsComponentPage>
      <NewsletterComponent></NewsletterComponent>
     
    </div>
  );
}
