import About from '../components/home/About';
import Community from '../components/home/Community';
import Contact from '../components/home/Contact';
import Hero from '../components/home/Hero';
import Offering from '../components/home/Offering';
import Service from '../components/home/Service';
import Footer from '../components/layouts/Footer';
import Navbar from '../components/layouts/Navbar';

export default function Home() {
	return (
		<div>
			<Navbar />
			<Hero />
			<About />
			<Offering />
			<Service />
			<Community />
			<Contact />
			<Footer />
		</div>
	);
}
