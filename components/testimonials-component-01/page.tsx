import type { TestimonialItem } from '@/components/shadcn-studio/blocks/testimonials-component-01/testimonials-component-01'
import TestimonialsComponent from '@/components/shadcn-studio/blocks/testimonials-component-01/testimonials-component-01'

const testimonials: TestimonialItem[] = [
  {
    name: 'Sarah M.',
    role: 'Book Enthusiast',
    company: 'Reader',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png?width=40&height=40&format=auto',
    rating: 5,
    content: "I absolutely love this bookstore! The selection is amazing, and I always find something new to read. Shipping is super fast too!"
  },
  {
    name: 'Daniel R.',
    role: 'Avid Reader',
    company: 'Book Club Member',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png?width=40&height=40&format=auto',
    rating: 4,
    content: "This is my go-to online bookstore. Their recommendations are always spot-on, and the site is very easy to navigate."
  },
  {
    name: 'Priya K.',
    role: 'Literature Lover',
    company: 'Reader',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png?width=40&height=40&format=auto',
    rating: 5,
    content: "Thanks to the featured authors section, I’ve discovered some incredible writers. The variety and quality of books are excellent!"
  },
  {
    name: 'Michael L.',
    role: 'Casual Reader',
    company: 'Reader',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png?width=40&height=40&format=auto',
    rating: 4,
    content: "Every purchase has been a seamless experience. Reviews help me choose the perfect book, and delivery is always quick and reliable."
  }
]


const TestimonialsComponentPage = () => {
  return <TestimonialsComponent testimonials={testimonials} />
}

export default TestimonialsComponentPage
