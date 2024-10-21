import React from 'react';
import { useParams } from 'react-router-dom';

function ProjectView() {
  const { id } = useParams();
  const projects = [
    {
      id: 1,
      title: 'StyleHive',
      description: 'A fully functional e-commerce platform designed for a seamless shopping experience.',
      features: [
        'User-friendly interface with product filtering by category, price, and brand.',
        'Integrated shopping cart and wishlist functionality with dynamic updates.',
        'Payment gateway integration for secure online transactions.',
        'Admin dashboard for managing products, orders, and customers.'
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'CSS', 'Bootstrap'],
      challenges: [
        'Optimizing the search and filter functionality for better user experience.',
        'Implementing secure payment gateway integration with Stripe API.',
        'Ensuring responsive design across different devices and screen sizes.'
      ],
      achievements: [
        'Successfully reduced page load time by optimizing image handling and lazy loading.',
        'Implemented a recommendation system for suggesting products based on user history.',
        'Ensured full test coverage for all critical features, improving system reliability.'
      ],
      githubLink: 'https://github.com/AbhishaDas/Ecom_project.git',
      liveLink: '', // You can include a live demo link here if available
    },
    {
      id: 2,
      title: 'Swapify',
      description: 'A sustainable e-commerce platform promoting product swapping and reuse.',
      features: [
        'User-to-user product exchange system with item listing and filtering.',
        'Rating and review system for evaluating product quality and user reliability.',
        'Push notifications for product match alerts and swap requests.',
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'WebSocket', 'CSS', 'Bootstrap'],
      challenges: [
        'Building a real-time notification system for swap requests using WebSockets.',
        'Creating a secure and scalable user-to-user transaction system.',
      ],
      achievements: [
        'Successfully increased user engagement by 20% through an improved notification system.',
        'Developed a secure swap transaction mechanism, reducing disputes by 15%.',
      ],
      githubLink: 'https://github.com/AbhishaDas/Swapify.git',
    },
    {
      id: 3,
      title: 'LearnTech',
      description: 'An educational platform offering tech courses and resources for learning.',
      features: [
        'Course management system allowing users to enroll, track progress, and receive certificates.',
        'Dynamic quiz and assessment system for measuring learning outcomes.',
        'Admin panel for adding and updating courses, managing users, and tracking performance.',
      ],
      technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'CSS', 'Material UI'],
      githubLink: 'https://github.com/AbhishaDas/React_LearnTech.git',
    },
    // You can add similar expanded details for the rest of the projects
  ];
  

  const project = projects.find(proj => proj.id === parseInt(id));

  return (
    <div className="project_view">
      <h3>Titile:  {project?.title}</h3>
      <p>{project?.description}</p>
      <p>{project?.technologies}</p>
      <p>{project?.description}</p>
    </div>
  );
}

export default ProjectView;
