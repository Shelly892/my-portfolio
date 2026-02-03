export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string; // Existing, often used for "View Details"
  detailsUrl?: string; // New: dedicated project details page/site
  image: string;
  icon?: string; // New: custom icon path
  gallery?: string[]; // New: list of screenshot images
  highlights: string[];
  date: string;
}

export const projects: Project[] = [
  {
    id: "cinequest",
    title: "CineQuest",
    subtitle: "Microservices Movie Discovery Platform",
    description:
      "A distributed microservice-based platform for movie discovery and notifications with clear service boundaries and architectural trade-off analysis.",
    techStack: ["Microservices", "Kubernetes", "Kafka", "gRPC", "React", "Redis", "Docker"],
    githubUrl: "https://github.com/Shelly892/CineQuest.git",
    detailsUrl: "https://youtu.be/8hz-Zm07NXQ", 
    image: "/projects/cinequest.png",
    icon: "/icons/cinequest-icon.svg", // Placeholder
    gallery: ["/projects/cinequest.png", "/projects/cinequest-2.png", "/projects/cinequest-3.png","/projects/cinequest-4.png", "/projects/cinequest-5.png", "/projects/cinequest-6.png", "/projects/cinequest-7.png"], // Placeholder gallery
    highlights: [
      "Designed and implemented distributed microservice architecture with clear service boundaries",
      "Developed Movie Service integrating TMDB API with Redis caching to reduce latency",
      "Implemented Notification Service consuming Kafka events for asynchronous email delivery",
      "Built complete React frontend integrated via centralized API Gateway",
      "Containerized and deployed using Docker and Kubernetes",
    ],
    date: "December 2025",
  },
  {
    id: "smarttrip-nyc",
    title: "SmartTrip NYC",
    subtitle: "Full-Stack Travel Itinerary Planner",
    description:
      "A comprehensive travel planning platform with authentication flows, AI and ML powered recommendations, and production deployment infrastructure.",
    techStack: ["React", "Spring Boot", "Flask", "PostgreSQL", "Docker", "Nginx", "JWT", "OAuth"],
    githubUrl: "https://github.com/Shelly892/SmartTripNYC.git",
    detailsUrl: "https://youtu.be/asM0rUBO5zA", 
    image: "/projects/smarttrip.png",
    icon: "/icons/smarttrip-icon.jpg", // Placeholder
    gallery: ["/projects/smarttrip.png","/projects/smarttrip-2.png","/projects/smarttrip-3.png","/projects/smarttrip-4.png"], 
    highlights: [
      "Led system maintenance phase, coordinating frontend, backend, and ML teams",
      "Implemented JWT-based login/logout and Google OAuth integration",
      "Managed bug fixes and feature requests following agile practices",
      "Maintained production deployment using Docker Compose, Nginx, and CI/CD pipelines",
    ],
    date: "July 2025",
  },
  {
    id: "dublin-bikeshare",
    title: "Dublin BikeShare App",
    subtitle: "Real-time Bike Availability",
    description:
      "Web application displaying real-time Dublin bike availability and weather conditions with predictive analytics for peak usage forecasting.",
    techStack: ["Flask", "JavaScript", "HTML/CSS", "REST", "AWS EC2", "Chart.js", "Google Maps API"],
    githubUrl: "https://github.com/Shelly892/Bike-app-repository.git",
    detailsUrl: "https://example.com/bikeshare", // Placeholder
    image: "/projects/bikeshare.png",
    icon: "/icons/bikeshare-icon.svg", // Placeholder
    gallery: ["/projects/bikeshare.png"], // Placeholder
    highlights: [
      "Integrated Google Maps API for geospatial data and real-time availability heatmaps",
      "Implemented predictive analytics charts using historical data",
      "Designed and built user interface based on user stories",
      "Successfully deployed on AWS EC2",
      "Facilitated agile practices, managed project timeline and task allocation",
    ],
    date: "May 2025",
  },
  {
    id: "heart-disease-analytics",
    title: "Heart Disease Risk Analytics",
    subtitle: "ML-Powered Health Dashboard",
    description:
      "Analytics dashboard leveraging big data and machine learning for heart disease risk prediction with interactive visualizations.",
    techStack: ["Hadoop", "Hive SQL", "JavaScript", "Linear Regression", "Logistic Regression", "Random Forest"],
    githubUrl: "https://github.com/Shelly892",
    detailsUrl: "https://example.com/analytics", // Placeholder
    image: "/projects/analytics.png",
    icon: "/icons/analytics-icon.svg", // Placeholder
    gallery: ["/projects/analytics.png"],
    highlights: [
      "Analyzed 10,000+ records with data cleaning and feature engineering",
      "Built multiple ML models achieving 93% accuracy in risk prediction",
      "Created visualizations communicating complex findings to non-technical stakeholders",
    ],
    date: "November 2025",
  },
];
