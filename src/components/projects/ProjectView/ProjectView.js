import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import sh1 from '../../../assets/images/projects/download.png';
import sh2 from '../../../assets/images/projects/download (1).png';
import sh3 from '../../../assets/images/projects/download (2).png';
import sh4 from '../../../assets/images/projects/download (3).png';
import sh5 from '../../../assets/images/projects/download (4).png';
import sh6 from '../../../assets/images/projects/download (5).png';
import sy1 from '../../../assets/images/projects/1.png';
import sy2 from '../../../assets/images/projects/2.png';
import sy3 from '../../../assets/images/projects/3.png';
import lt1 from '../../../assets/images/projects/lt1.png';
import lt2 from '../../../assets/images/projects/lt2.png';
import lt3 from '../../../assets/images/projects/lt3.png';
import nf1 from '../../../assets/images/projects/nf1.png';
import nf2 from '../../../assets/images/projects/nf2.png';
import nf3 from '../../../assets/images/projects/nf3.png';
import gg1 from '../../../assets/images/projects/gg1.png';
import gg2 from '../../../assets/images/projects/gg2.png';
import gg3 from '../../../assets/images/projects/gg3.png';

const ProjectView = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null); // State for modal image

  const projects = [
    {
      id: 1,
      title: 'StyleHive',
      description: 'The StyleHive E-commerce Platform is a cutting-edge web application designed to enhance online shopping experiences. Developed using Django, Python, and PostgreSQL, the platform offers a seamless and user-friendly interface for both customers and administrators. It supports a wide range of products, efficient order processing, and secure payment integration, ensuring a smooth and enjoyable shopping experience.',
      features: [

        'Product Management:',
        '- Display detailed product listings with images, descriptions, prices, and availability status.',
        '- Category filtering for products (e.g., top wear, bottom wear, dresses).',
        '- Search functionality based on keywords, categories, or product names.',
        '- Real-time inventory management to track stock levels and update availability.',
        'User Management:',
        '- Secure user registration and login system with session management.',
        '- User profiles for managing personal information.',
        '- Wishlist feature allowing users to save products for future purchases.',
        'Shopping Cart:',
        '- Add or remove products from the cart.',
        '- Select product sizes directly within the cart, with dynamic pricing updates.',
        '- Streamlined checkout process with order summary and payment options.',
        'Order Management:',
        '- Manage and track customer orders from placement to delivery.',
        '- Provide order tracking for customers.',
        'Payment Integration:',
        '- Support for multiple payment gateways, including PayPal.',
        '- Secure payment transactions with encryption to protect sensitive data.',
        'Admin Panel:',
        '- Custom admin dashboard designed for managing users, products, and orders.',
        '- User Management: Easily view, edit, and manage user accounts.',
        '- Product Management: Add, edit, or delete products, update stock levels, and manage product categories.',
        '- Order Management: Track order statuses, view order details, and manage order fulfillment.',
        '- Hosting & Deployment:',
        '- Hosted on AWS EC2 for scalable and reliable web hosting.',
        '- Utilizes PostgreSQL for robust and secure database management.',
        '- Deployed with Nginx for load balancing and Gunicorn for serving the Django application efficiently.',
      ],
      technologies: [
        'Backend: Python, Django',
        'Design: HTML, CSS, Bootstrap',
        'Database: PostgreSQL',
        'Web Hosting: AWS EC2',
      ],
      githubLink: 'https://github.com/AbhishaDas/Ecom_project.git',
      liveLink: 'http://www.ecomweb-abhishadas.buzz/',
      screenshots: [sh1, sh2, sh3, sh4, sh5, sh6],
    },
    {
      id: 2,
      title: 'Swapify',
      description: 'Swapify is an innovative e-commerce platform designed to facilitate seamless buying and selling experiences. Built using Django, Python, and PostgreSQL for the backend, and React for the frontend, Swapify provides a user-friendly interface for both buyers and sellers. Users can easily register, list products, and connect with potential buyers while enjoying a secure and efficient shopping environment.',
      features: [
        'User Registration and Sign-In:',
        '- Secure user registration and login system with session management.',
        'UI Design:',
        '- Modern and responsive UI built with React for an engaging user experience.',
        'Seller Features:',
        '- Users can sell products through the site, allowing easy listing of items.',
        '- User-friendly options for adding products, including category, price, quantity, usage description, and multiple images.',
        '- Sellers can provide contact details and location information for buyers.',
        'Buyer Features:',
        '- Buyers can select product locations to filter search results.',
        '- Advanced search functionality for viewing products by name and category.',
        '- Buyers can contact sellers directly through the platform.',
        '- Wishlist feature allowing buyers to save products for future reference.',
        '- Detailed product views available after signing up.',
      ],
      technologies: [
        'Python(Django)',
        'React js',
        'Postgresql',
        'REST API'
      ],
      githubLink: 'https://github.com/AbhishaDas/Swapify.git',
      liveLink: '',
      screenshots: [sy1,sy2,sy3],

    },
    {
      id: 3,
      title: 'Learn Tech',
      description: 'Learn Tech is an engaging landing page created using React.js, designed to provide users with easy access to various learning resources and opportunities. The application features dynamic routing and a modern UI, offering a seamless navigation experience while showcasing different styles and components for an appealing presentation.',
      features: [
        'Dynamic Routing:',
        '- Implemented React Router for smooth navigation between different sections of the landing page.',
        'Responsive UI Design:',
        '- Utilized various styles to create a visually appealing and user-friendly interface.',
        'Content Sections:',
        '- Featured sections for learning resources, tutorials, and tips to enhance user engagement.',
        '- Clear call-to-action buttons guiding users to explore further.',
      ],
      technologies: [
        'Frontend: React.js',
        'Routing: React Router',
        'Styling: CSS, styled-components',
      ],
      githubLink: 'https://github.com/AbhishaDas/LearnTech.git',
      liveLink: 'https://abhishadas.github.io/React_LearnTech/',
      screenshots: [lt1,lt2,lt3],
    },
    {
      id: 4,
      title: 'Netflix Clone',
      description: 'The Netflix Clone is a dynamic web application built to replicate the core functionalities of the popular streaming platform. Utilizing the TMDB (The Movie Database) API for fetching movie data and integrating with YouTube for video playback, this project offers users a seamless and engaging experience to browse, search, and watch their favorite movies and TV shows in one place.',
      features: [
        'Dynamic Movie Listings:',
        '- Fetch movie and TV show data in real-time using the TMDB API.',
        '- Display detailed information about each title, including ratings, genres, and synopses.',
        'User-Friendly Interface:',
        '- Intuitive and responsive UI designed for optimal viewing on all devices.',
        '- Smooth navigation for browsing categories and searching for specific titles.',
        'YouTube Integration:',
        '- Embed YouTube videos for trailers and full movie content directly on the platform.',
        '- Easy access to video playback features with a seamless viewing experience.',
      ],
      technologies: [
        'React.js',
        'TMDB API',
        'Youtube API'

      ],
      githubLink: 'https://github.com/AbhishaDas/NetflixClone.git',
      liveLink: 'https://abhishadas.github.io/React_Netflix/',
      screenshots: [nf1,nf2,nf3],
    },
    {
      id: 5,
      title: 'Gourmet Greens',
      description: 'Gourmet Greens is a visually appealing landing page created using HTML, CSS, and Bootstrap. This static page showcases a range of fresh and organic products, designed to attract health-conscious consumers. The responsive layout ensures a seamless experience across all devices, making it easy for users to explore the offerings of Gourmet Greens.',
      features: [
        'Responsive Design:',
        '- Utilized Bootstrap to create a responsive layout that adapts to various screen sizes.',
        'Product Showcase:',
        '- Display a selection of fresh and organic products with appealing visuals and descriptions.',
        'User-Friendly Navigation:',
        '- Simple and intuitive navigation to guide users through the content.',
        'Call-to-Action Buttons:',
        '- Strategically placed buttons to encourage users to explore products or make inquiries.',
      ],
      technologies: [
        'HTML5',
        'CSS3',
        'Bootstrap'
      ],
      githubLink: 'https://github.com/AbhishaDas/GourmetGreens.git',
      liveLink: 'https://abhishadas.github.io/Gourmet_Greens/', 
      screenshots: [gg1,gg2,gg3],
    }
  ];

  const project = projects.find(proj => proj.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white text-xl">Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="border border-gray-900 p-6 rounded-lg">
          {/* Header Section */}
          <div className="border-b border-gray-700 pb-6 mb-6">
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <p className="text-lg leading-relaxed">{project.description}</p>
          </div>

          {/* Screenshot Gallery Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Screenshots</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {project.screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(screenshot)} // Set the selected image when clicked
                >
                  <img
                    src={screenshot}
                    alt={`Screenshot ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="border-b border-gray-700 pb-6 mb-6"></div>

          {/* Features Section */}
          <div className="border-b border-gray-700 pb-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <div className="space-y-3">
              {project.features.map((feature, index) => (
                <div key={index}>
                  {feature.includes(':') ? (
                    <>
                      <h3 className="font-medium mb-2">{feature.split(':')[0]}</h3>
                      <p className="pl-4">{feature.split(':')[1]}</p>
                    </>
                  ) : (
                    <h3 className="font-medium mt-4 mb-2">{feature}</h3>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Section */}
          <div className="border-b border-gray-700 pb-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <div key={index} className="px-4 py-2 rounded-lg border border-gray-700">
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="border-b border-gray-700 pb-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Project Links</h2>
            <div className="flex gap-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors"
              >
                GitHub Repository
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-pink-800 text-white rounded-md hover:bg-pink-700 transition-colors"
              >
                Live Demo
              </a>
            </div>
          </div>




          {/* Modal for showing larger image */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
              onClick={() => setSelectedImage(null)} // Close modal on click
            >
              <div className="relative">
                <img src={selectedImage} alt="Larger Screenshot" className="max-w-full max-h-screen object-contain" />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-2 right-2 text-white text-3xl"
                >
                  &times;
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
