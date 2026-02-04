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
    techStack: ["Microservices", "Kubernetes", "Kafka", "React", "Redis","gRPC", "Docker"],
    githubUrl: "https://github.com/Shelly892/CineQuest.git",
    detailsUrl: "https://youtu.be/8hz-Zm07NXQ", 
    image: "/projects/cinequest.png",
    icon: "/icons/cinequest-icon.png", 
    gallery: ["/projects/cinequest.png", "/projects/cinequest-2.png", "/projects/cinequest-3.png","/projects/cinequest-4.png", "/projects/cinequest-5.png", "/projects/cinequest-6.png", "/projects/cinequest-7.png"],
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
    icon: "/icons/smarttrip-icon.png", 
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
    subtitle: "Real-time and predictive insights into Dublin's public bike-sharing system",
    description:
      "Web application displaying real-time Dublin bike availability and weather conditions with predictive analytics for peak usage forecasting.",
    techStack: ["Flask", "JavaScript", "python","HTML/CSS", "REST", "AWS EC2", "Chart.js", "Google Maps API"],
    githubUrl: "https://github.com/Shelly892/Dublin-BikeShare-App.git",
    detailsUrl: "https://youtu.be/YFmra3evr1Y", 
    image: "/projects/bikeshare.png",
    icon: "/icons/bikeshare-icon.png", 
    gallery: ["/projects/bikeshare.png","/projects/bikeshare-2.png","/projects/bikeshare-3.png","/projects/bikeshare-4.png","/projects/bikeshare-5.png"], 
    highlights: [
      "Developed full-stack web application displaying real-time Dublin bike availability and weather conditions",
      "Integrated Google Maps API for geospatial data and real-time availability heatmaps",
      "Implemented predictive analytics charts using historical data",
      "Successfully deployed on AWS EC2",
      "Facilitated agile practices, managed project timeline and task allocation",
    ],
    date: "May 2025",
  },
  {
    id: "heart-disease-analytics",
    title: "Heart Disease Risk Analytics Dashboard",
    subtitle: "ML-Powered Health Dashboard",
    description:
      "Analytics dashboard leveraging big data for heart disease risk prediction with interactive visualizations.",
    techStack: ["Hadoop", "Hive SQL", "JavaScript", "Python", "Docker","HTML/CSS"],
    githubUrl: "https://github.com/Shelly892/HeartRisk-Analytics.git",
    detailsUrl: "https://heartdisease-risk-analytics.netlify.app/", 
    image: "/projects/analytics.png",
    icon: "/icons/analytics-icon.png", 
    gallery: ["/projects/analytics.png", "/projects/analytics-2.png"],
    highlights: [
      "Analyzed 1,000+ records with data cleaning and feature engineering",
      "Implemented SQL-based data preprocessing and rule-based risk scoring to identify demographic and risk-level patterns in patient data",
      "Created visualizations communicating complex findings to non-technical stakeholders",
    ],
    date: "November 2025",
  },
];
