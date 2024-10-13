import { Link } from 'react-router-dom';
import restaurantFoodImage from './assets/restaurant-food.jpg';
import bruschettaImage from './assets/bruschetta.jpg';
import greekSaladImage from './assets/greek-salad.jpg';
import lemonDessertImage from './assets/lemon-dessert.jpg';
import lady1 from './assets/lady1.jpg'
import lady2 from './assets/lady2.jpg'
import dude1 from './assets/dude1.jpg'
import dude2 from './assets/dude2.jpg'
import AImage from './assets/chefs-mario-and-adrian_a.jpg'
import BImage from './assets/chefs-mario-and-adrian_b.jpg'
import './assets/Home.css';
import pages from '../utils/pages';
import MealCard from './MealCard'
import TestimonialCard from './TestimonialCard';

const meals = [
    {
      name: 'Greek Salad',
      image: greekSaladImage,
      price: '$12.99',
      description: `The famous greek salad of crispy lettuce, peppers, olives and 
        our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
        croutons.`,
    },
    {
      name: 'Bruschetta',
      image: bruschettaImage,
      price: '$5.99',
      description: `Our Bruschetta is made from grilled bread that has been 
        smeared with garlic and seasoned with salt and olive oil.`,
    },
    {
      name: 'Lemon Dessert',
      image: lemonDessertImage,
      price: '$5.00',
      description: `This comes straight from grandma's recipe book, every last 
        ingredient has been sourced and is as authentic as can be imagined.`,
    },
  ];
  
  const customers = [
    {
      fullName: 'Mary Jane',
      image: lady1,
      rating: [1, 1, 1, 1, 0.5],
      says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      fullName: 'Joey JoJo',
      image: dude1,
      rating: [1, 1, 1, 1, 1],
      says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      fullName: 'Emlia Earhart',
      image: lady2,
      rating: [1, 1, 1, 1, 0.5],
      says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      fullName: 'Amplitude',
      image: dude2,
      rating: [1, 1, 1, 1],
      says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
  ];

const Home = () => { 
    return (
        <>
            <section className="hero">
            <div className="container grid">
                <div className="hero-information">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    We are a family owned Mediterranean restaurant, 
                    focused on traditional recipes served with a modern twist.
                </p>
                <Link className="button-primary" to={pages.get('bookings').path}>
                    Reserve a table
                </Link>
                </div>
                <img 
                className="hero-image" 
                src={restaurantFoodImage} 
                alt="Restaurant food" 
                />
            </div>
            </section>
            <section className="container grid week-specials">
            <div className="week-specials-header">
                <h2>This week specials!</h2>
                <Link className="button-primary" to={pages.get('orderOnline').path}>
                Online Menu
                </Link>
            </div>
            {meals.map((meal, index) => 
                <MealCard key={index} meal={meal} />
            )}
            </section>
            <section className="testimonials">
            <div className="container grid">
                <h2>What people say about us!</h2>
                {customers.map((customer, index) => 
                <TestimonialCard key={index} customer={customer} />
                )}
            </div>
          </section>
          <section className="container grid our-story">
            <div className="our-story-description">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum. Sed ut 
                perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
                inventore veritatis et quasi architecto beatae vitae dicta sunt 
                explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut 
                odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
                voluptatem sequi nesciunt.
                </p>
            </div>
            <div className="our-story-chefs">
                <img src={AImage} alt="Chefs Mario and Adrian" />
                <img src={BImage} alt="Chefs Mario and Adrian" />
            </div>
            </section>
        </>
    );
};


export default Home;